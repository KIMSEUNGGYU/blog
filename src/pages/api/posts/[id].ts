import { NextApiRequest, NextApiResponse } from 'next';

import { NotionAPI } from 'notion-client';

import { ExtendedRecordMap } from 'notion-types';

const api = new NotionAPI();

const cache: { [key: string]: ExtendedRecordMap } = {};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const postId = req.query.id as string;

  // dev 용
  if (cache[postId]) {
    return res //
      .status(200)
      .json({
        recordMap: cache[postId],
      });
  }

  const recordMap = await api.getPage(postId);

  cache[postId] = recordMap;

  // 🔥🐛  TODO-GYU:  product - API 속도 개선 작업 필요
  // const recordMap = await api.getPage(postId);

  return res //
    .status(200)
    .json({
      recordMap,
    });
}
