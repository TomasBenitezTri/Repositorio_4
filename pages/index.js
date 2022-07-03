import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Comments from '../components/Comments'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Utterance comments test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Utterances Example!
        </h1>
        <Comments />
      </main>
    </div>
  )
}