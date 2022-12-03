import { useComment } from "src/hooks/useComment";
import { PostByCommentId } from "src/components/Post/PostByCommentId";

export const CommentComponent = () => {
  const { data, error, isLoading } = useComment();

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
      <PostByCommentId id={data.postId}/>
    </div>
  </div>
  );
}