import Head from "next/head";

import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.textt}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
          incidunt deserunt provident aperiam! Nesciunt ab, cum explicabo,
          quaerat iusto harum enim dolores minus, cupiditate dolore tenetur
          similique. Harum et molestias, velit optio obcaecati odio nulla,
          repudiandae repellat illum eaque exercitationem minus similique
          pariatur enim laudantium iusto eum commodi labore excepturi temporibus
          est natus! Dolorem, doloribus? Veniam veritatis minus ipsa assumenda
          placeat. Debitis modi ea quos optio commodi asperiores rem eos!
          Eveniet autem officiis atque qui cum at aspernatur culpa, excepturi
          molestiae id labore blanditiis vel quis ex! Quas architecto eveniet
          totam ipsam, dolor asperiores! Eius quidem omnis numquam pariatur at!
        </p>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
          incidunt deserunt provident aperiam! Nesciunt ab, cum explicabo,
          quaerat iusto harum enim dolores minus, cupiditate dolore tenetur
          similique. Harum et molestias, velit optio obcaecati odio nulla,
          repudiandae repellat illum eaque exercitationem minus similique
          pariatur enim laudantium iusto eum commodi labore excepturi temporibus
          est natus! Dolorem, doloribus? Veniam veritatis minus ipsa assumenda
          placeat. Debitis modi ea quos optio commodi asperiores rem eos!
          Eveniet autem officiis atque qui cum at aspernatur culpa, excepturi
          molestiae id labore blanditiis vel quis ex! Quas architecto eveniet
          totam ipsam, dolor asperiores! Eius quidem omnis numquam pariatur at!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}> See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
