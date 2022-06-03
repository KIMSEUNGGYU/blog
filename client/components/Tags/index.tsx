import * as S from './styles';

import TagItem from '../TagItem';

type TagsProps = {
  tags: any[];
};

// TODO-GYU: props 테스트 코드를 위해 적용
// 리팩토링 필수
export default function Tags(props: TagsProps) {
  const tags = props.tags || [
    { id: 1, name: 'all' },
    { id: 2, name: '리액트' },
    { id: 3, name: '바닐라' },
    { id: 4, name: '개발환경' },
  ];

  if (tags.length === 0) {
    return (
      <S.TagList>
        <p>태그가 존재하지 않습니다.</p>
      </S.TagList>
    );
  }

  return (
    <S.TagList>
      {tags.map((tag) => (
        <TagItem key={tag.id} name={tag.name} />
      ))}
    </S.TagList>
  );
}
