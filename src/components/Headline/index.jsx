import styles from 'src/components/Headline/Headline.module.css'

export function Headline(props) {
  // console.log(props.title);

  return (
    <div>
        <h1 className={styles.title}>{props.page} page</h1>

        <p className={styles.description}>
          アイテムの数は {props.children} 個です
        </p>
        <button onClick={props.handleReduce}>減らす</button>
    </div>
  );
}