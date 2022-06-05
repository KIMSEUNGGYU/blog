import * as S from './styles';

import TagItem from '../TagItem';

import { Tag } from '@/types/index';

type Props = {
  tags: Tag[];
  selectedTag: string;
  onClick: (tagName: string) => void;
};

export default function Tags(props: Props) {
  const { onClick } = props;

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
          selectedTag={props.selectedTag}
          onClick={onClick}
        />
      ))}
    </S.TagList>
  );
}
