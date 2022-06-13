import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Avunit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Hey, I&apos;m Avunit!</a>
        </h1>
        <p className={styles.description}>
          Hi! I&apos;m Avunit! I like Open Source software and helping people out!
        </p>

        <div className={styles.grid}>
          <a href="https://blog.avunit.tk" className={styles.card}>
            <h2>Read my blog! &rarr;</h2>
            <p>Hopefully updated regularly...</p>
          </a>

          <a href="https://troll.avunit.tk" className={styles.card}>
            <h2>Troll your friends! &rarr;</h2>
            <p>Plagiarism is fine, right?!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          Built with ❤️ by Avunit. Licensed under GPL 3.
      </footer>
    </div>
  )
}
export default Home
