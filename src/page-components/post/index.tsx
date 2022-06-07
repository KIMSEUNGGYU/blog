import PostInfo from '@/components/PostInfo';
// THINK-GYU: 공통 컴포넌트로 빼는 게 좋을듯?
import Post from '@/components/Post'; // NotionConents?

type Props = {
  recordMap: any;
  post: any;
};

export default function PostPage({ post, recordMap }: Props) {
  return (
    <>
      <PostInfo post={post} />
      <Post recordMap={recordMap} />
    </>
  );
}
