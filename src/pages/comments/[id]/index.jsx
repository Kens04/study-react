import Head from 'next/head'
import { Header } from "src/components/Header";
import { CommentComponent } from 'src/components/comment';
import { SWRConfig } from 'swr';
import { API_URL } from 'src/utils/const';

export const getStaticPaths = async () => {
  const comments = await fetch(`${API_URL}/comments?_limit=10`);
  const commentsData = await comments.json();
  const paths = commentsData.map((comment) => ({
    params: { id: comment.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;
  const COMMENT_API_URL = `${API_URL}/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);

  if (!comment.ok) {
    return {
      notFound: true,
      revalidate: 1,
    };
  }

  const commentsData = await comment.json();

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentsData,
      },
    },
    revalidate: 1,
  };
};

const CommentsId = (props) => {
  const { fallback } = props;

  return (
    <div>
      <Header />
      <SWRConfig value={{ fallback }}>
        <CommentComponent />
      </SWRConfig>
    </div>
  )
}

export default CommentsId;