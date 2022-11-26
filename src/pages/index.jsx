import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Footer } from "../components/Footer";
import { Main } from '../components/Main';
import { Header } from "../components/Header";
import { useCallback } from 'react';

// const handleClick = (e) => {
//   console.log(e.target.href);
//   e.preventDefault();
// }

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  },[]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a href="/about" onClick={handleClick}
      >ボタン</a>
      <Main page="index" />
      <Footer />
    </div>
  )
}
