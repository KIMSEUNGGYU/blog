import Post from '@/components/Post';

type Props = {
  recordMap: any;
  post: any;
};

export default function PostPage({ recordMap, post }: Props) {
  return <Post recordMap={recordMap} />;
}
