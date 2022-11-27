import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Footer } from "../components/Footer";
import { Main } from '../components/Main';
import { Header } from "../components/Header";
import { useEffect, useState } from 'react';

// const handleClick = (e) => {
//   console.log(e.target.href);
//   e.preventDefault();
// }

export default function Home() {
  const [count, setCount] = useState(1)

  const handleClick = (e) => {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  },[]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>{count}</h1>
      <button onClick={handleClick}>ボタン</button>
      <Main page="index" />
      <Footer />
    </div>
  )
}
