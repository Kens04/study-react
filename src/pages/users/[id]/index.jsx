import Head from 'next/head'
import { useRouter } from 'next/router';
import { Header } from "src/components/Header";
import { Post } from 'src/components/Post';
import { useUser } from 'src/hooks/useUser';
import { UserComponent } from 'src/components/User';

const UsersId = () => {
  return (
    <div>
      <Header />
      <UserComponent />
    </div>
  )
}

export default UsersId;