import * as S from './styles';

const postItem = {
  title: '',
  createdAt: '',
  summary: '',
  contents: '',
  tags: [''],
};

type PostItemProps = {
  post: typeof postItem;
};

export default function PostItem({ post }: PostItemProps) {
  const { title, createdAt, contents, tags } = post;

  return (
    <S.PostItem>
      <div>
        <div>
          <S.Title>{title}</S.Title>
          <S.CreatedAt>{createdAt}</S.CreatedAt>
        </div>
      </div>
      <S.Contents>
        <span>{contents}</span>
      </S.Contents>
      <S.Tags>
        {tags.map((tag) => (
          <li key={`${tag}`}>
            <p>{`#${tag}`}</p>
          </li>
        ))}
      </S.Tags>
    </S.PostItem>
  );
}
