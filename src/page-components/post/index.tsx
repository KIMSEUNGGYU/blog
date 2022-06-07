import PostInfo from '@/components/PostInfo'; // postDetail
import Post from '@/components/Post'; // postDetail

type Props = {
  recordMap: any;
  post: any;
};

export default function PostPage({ recordMap, post }: Props) {
  return (
    <>
      <PostInfo post={post} />
      <Post recordMap={recordMap} />
    </>
  );
}
