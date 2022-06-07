import { NextApiRequest, NextApiResponse } from 'next';

import { NotionAPI } from 'notion-client';
import notion from '../notion/client';

import { ExtendedRecordMap } from 'notion-types';

import { Post } from '@/types/index';

const api = new NotionAPI();

type Cache = {
  [key: string]: {
    post: Post;
    recordMap: ExtendedRecordMap;
  };
};

const cache: Cache = {};

const getPageForPost = async (pageId: string) => {
  const postPage = await notion.pages.retrieve({
    page_id: pageId,
  });

  return postPage;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const postId = req.query.id as string;

  // dev 용
  if (cache[postId]) {
    return res //
      .status(200)
      .json({
        post: cache[postId].post,
        recordMap: cache[postId].recordMap,
      });
  }

  const [recordMap, postPage]: any = await Promise.all([api.getPage(postId), getPageForPost(postId)]);
  const post: Post = {
    id: postPage.id,
    title: postPage.properties.title.title[0]['plain_text'],
    tags: postPage.properties.tags['multi_select'],
    description: postPage.properties.description['rich_text'][0]['plain_text'],
    createdTime: new Date(postPage.created_time).toLocaleDateString(),
  };

  cache[postId] = {
    post,
    recordMap,
  };

  // 🔥🐛  TODO-GYU:  product - API 속도 개선 작업 필요
  // const recordMap = await api.getPage(postId);
  // const postPage: any = await getPageForPost(postId);
  // const post: Post = {
  //   id: postPage.id,
  //   title: postPage.properties.title.title[0]['plain_text'],
  //   tags: postPage.properties.tags['multi_select'],
  //   description: postPage.properties.description['rich_text'][0]['plain_text'],
  //   createdTime: new Date(postPage.created_time).toLocaleDateString(),
  // };

  return res //
    .status(200)
    .json({
      recordMap,
      post,
    });
}
