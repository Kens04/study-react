import Link from "next/link";
import { useComments } from "src/hooks/useFetchArray";

export const CommentsComponent = () => {
  const { data, error, isLoading, isEmpty } = useComments();

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
};