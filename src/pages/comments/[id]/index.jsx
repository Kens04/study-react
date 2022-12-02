import Head from 'next/head'
import { Header } from "src/components/Header";
import { CommentComponent } from 'src/components/comment';

const CommentsId = () => {
  return (
    <div>
      <Header />
      <CommentComponent />
    </div>
  )
}

export default CommentsId;