import * as S from './styles';

type TagItemProps = {
  name: string;
};

export default function TagItem({ name }: TagItemProps) {
  const tag = `#${name}`;

  return (
    <S.TagItem>
      <button
        type="button" //
        // className={tag === selectedTag ? 'active' : ''}
        // onClick={() => onClick(tag)}
      >
        {tag}
      </button>
    </S.TagItem>
  );
}
