import Head from "next/head";
import { useRouter } from "next/router";
import { CommentListByPostId } from "src/components/comment/CommentListByPostId";
import { UserNameByUserId } from "src/components/User/UserNameByUserId";
import { useFetch } from "src/hooks/useFetch";
import { API_URL } from "src/utils/const";

export const PostDetail = () => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch(router.query.id ? `${API_URL}/posts/${router.query.id}` : null);

  if(isLoading) {
    return <div>ローディング中</div>;
  }

  if(error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
    <UserNameByUserId id={data.userId}/>

    <h1 className="text-3xl font-bold">{data?.title}</h1>
    <p className="text-xl text-gray-900 mt-2">{data?.body}</p>

    <h2 className="text-xl font-bold mt-10">コメント一覧</h2>
    <div className="mt-2"></div>
    <CommentListByPostId id={data.id}/>
  </div>
  );
};

export default PostDetail;