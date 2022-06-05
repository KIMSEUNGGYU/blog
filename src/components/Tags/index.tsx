import * as S from './styles';

import TagItem from '../TagItem';

import { Tag } from '@/types/tags';

type TagsProps = {
  tags: Tag[];
};

// TODO-GYU: props 테스트 코드를 위해 적용
// 리팩토링 필수
export default function Tags(props: TagsProps) {
  const tags = [
    {
      id: 'gyu-all',
      name: '전체보기',
    },
    ...props.tags,
  ];

  return (
    <S.TagList>
      {tags.map(({ id, name }) => (
        <TagItem
          key={id} //
          name={name}
        />
      ))}
    </S.TagList>
  );
}
