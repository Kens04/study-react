import Head from 'next/head'
import Image from 'next/image'
import styles from 'src/components/Links/Links.module.css';

export function Links({ items, handleReduce }) {
  return (
      <div className={styles.grid}>
        <button onClick={handleReduce}>減らす</button>
        {items.map((item) => {
          return (
            <a key={item.href} href={item.href} className={styles.card}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </a>
          );
        })}
        </div>
  );
}
