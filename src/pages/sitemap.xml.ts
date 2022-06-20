// pages/sitemap.xml.js

const BASE_URL = 'https://kimseunggyu.vercel.app/posts';

import { GetServerSideProps } from 'next';

import { getPostsAndTags } from '@/src/apis/index';

import { Post } from '@/types/index';

import { HOME_POSTS_DATABASE_ID } from 'src/constant';

// TODO-GYU: URL 을 한글로 변경하면 id 가 아닌, title로 변경하기??
function generateSiteMap(posts: Post[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already -->
     <url>
       <loc>https://kimseunggyu.vercel.app</loc>
     </url>
     ${posts
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${BASE_URL}/${id}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const { posts } = await getPostsAndTags(HOME_POSTS_DATABASE_ID);

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;
