import Link from "next/link";
import { API_URL } from "src/utils/const";
import { useFetchArray } from "src/hooks/useFetchArray";

export const CommentList = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`${API_URL}/comments`);

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
    <ul className="space-y-2">
    {data.map((comment) => {
      return (
        <li key={comment.id} className="border-b pb-2">
          <Link className="block hover:text-blue-500" href={`/comments/${comment.id}`} prefetch={false}>
            {comment.body}
          </Link>
        </li>
      );
    })}
  </ul>
  );
};