import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/useFetchArray";

export const CommentsByPostId = (props) => {
  const {
    data,
    error,
    isLoading,
    isEmpty,
  } = useCommentsByPostId(props.id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isEmpty) {
    return <p>No users found.</p>;
  }

  return (
    <ol>
    {data.map((comment) => {
      return (
        <li key={comment.id}>
          <Link href={`/comments/${comment.id}`}>
            {comment.body}
          </Link>
        </li>
      );
    })}
  </ol>
  );
}