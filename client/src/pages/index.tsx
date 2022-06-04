import * as S from './styles';

import Header from '../components/Header';
import Tags from '../components/Tags';
import Posts from '../components/Posts';

import { getDatabaseForTag } from '@/apis/tags';

import { Tag } from '@/types/tags';
import { MultiSelectType } from '@/types/notionApi';

import { HOME_POSTS_DATABASE_ID } from 'src/constant';

type IndexPageProps = {
  tags: Tag[];
};

export default function Index({ tags }: IndexPageProps) {
  return (
    <S.Container>
      <Header />
      <S.Divider />
      <Tags tags={tags} />
      <Posts posts={null} />
    </S.Container>
  );
}

export async function getServerSideProps() {
  const postsDatabaseId = HOME_POSTS_DATABASE_ID || '';

  // posts
  // const postsDatabase = await notion.databases.query({
  //   database_id: rootPostsDatabaseId,
  // });

  // parse Tags
  const tagsDatabase = await getDatabaseForTag(postsDatabaseId);
  const tags = (tagsDatabase.properties.tags as MultiSelectType).multi_select.options;

  return {
    props: {
      tags,
    },
  };
}
