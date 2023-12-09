import fs from 'fs';

const BASE_URL = 'https://kimseunggyu.vercel.app/posts';

// TODO-GYU: URL 을 한글로 변경하면 id 가 아닌, title로 변경하기??
// TODO-GYU: ts 로 변경하기?
export function generateSiteMap(posts) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!--We manually set the two URLs we know already -->
  <url>
    <loc>https://kimseunggyu.vercel.app</loc>
  </url>
  ${posts //
    .map(({ title }) => `<url><loc>${`${BASE_URL}/${title}`}</loc></url>`)
    .join('')}
</urlset>
`.replace(',', '');

  const path = `${process.cwd()}/public/sitemap.xml`;

  fs.writeFileSync(path, sitemap, 'utf-8');

  return sitemap;
}
