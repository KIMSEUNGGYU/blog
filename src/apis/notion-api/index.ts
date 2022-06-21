import rendererApi from './client';

export const getPage = async (pageId: string) => {
  const recordMap = await rendererApi.getPage(pageId);

  return recordMap;
};
