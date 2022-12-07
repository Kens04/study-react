import { PostTitleByCommentId } from "src/components/Post/PostTitleByCommentId";
import { useRouter } from "next/router";
import { useFetch } from "src/hooks/useFetch";
import { API_URL } from "src/utils/const";

export const CommentDetail = () => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch(router.query.id ? `${API_URL}/comments/${router.query.id}` : null);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div className="text-lg">
    <div>{data.name} ({data.email})</div>
    <h1 className="text-3xl font-bold">{data.body}</h1>
    <h2 className="text-xl font-bold mt-10">元の記事</h2>
    <div className="mt-2">
      <PostTitleByCommentId id={data.postId}/>
    </div>
  </div>
  );
}