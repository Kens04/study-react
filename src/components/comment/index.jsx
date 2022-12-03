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
    <div>
    <h1>{data.body}</h1>
    <ul>
      <li>{data.name}</li>
      <li>{data.email}</li>
    </ul>
    <h2>元の記事</h2>
    <PostByCommentId id={data.postId}/>
  </div>
  );
}