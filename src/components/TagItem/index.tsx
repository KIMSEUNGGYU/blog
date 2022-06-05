import * as S from './styles';

type Props = {
  name: string;
  selectedTag: string;
  onClick: (tagName: string) => void;
};

export default function TagItem({ name, selectedTag, onClick }: Props) {
  const tag = `#${name}`;

  return (
    <S.TagItem>
      <button
        type="button" //
        className={tag === selectedTag ? 'active' : ''}
        onClick={() => onClick(tag)}
      >
        {tag}
      </button>
    </S.TagItem>
  );
}
