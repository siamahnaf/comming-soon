import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Siam Ahnaf- Professional web developer</title>
        <meta name="description" content="Created by Siam Ahnaf" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span>Siam Ahnaf</span>
        </h1>
        <p className={styles.description}>
          I am comming soon
        </p>
        <div>
          <p className={styles.description}>
            Follow me on
          </p>
          <div className={styles.social}>
            <a
              href="https://www.facebook.com/siamahnaf198/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="fe:facebook" />
            </a>
            <a
              href="https://twitter.com/siamahnaf198/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="brandico:twitter-bird" />
            </a>
            <a
              href="https://www.linkedin.com/in/siamahnaf198/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="akar-icons:linkedin-fill" />
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
