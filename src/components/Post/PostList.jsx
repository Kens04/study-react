import Link from "next/link";
import { API_URL } from "src/utils/const";
import { useFetchArray } from "src/hooks/useFetchArray";

export const PostList = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`${API_URL}/posts`);

  if(isLoading) {
    return <div>ローディング中</div>;
  }

  if(error) {
    return <div>{error.message}</div>;
  }

  if(isEmpty) {
    return <div>データは空です</div>;
  }

  return (
      <ul className="space-y-4">
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link className="block group" href={`/posts/${post.id}`}>
                <h1 className="text-xl font-bold group-hover:text-blue-500">{post.title}</h1>
                <p className="text-lg text-gray-500 group-hover:text-blue-400">{post.body}</p>
            </Link>
          </li>
        );
      })}
      </ul>
  );
};

export default PostList;