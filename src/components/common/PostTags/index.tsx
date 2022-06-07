import * as S from './styles';

import { Tag } from '@/types/index';

type Props = {
  tags: Tag[];
};

export default function PostTags({ tags }: Props) {
  return (
    <S.Tags>
      {tags.map(({ id, name }: Tag) => (
        <li key={`${id}`}>
          <p>{`#${name}`}</p>
        </li>
      ))}
    </S.Tags>
  );
}
