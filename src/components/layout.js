import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link href="/">
            <a className={styles.link}>Scoreboard</a>
          </Link>
          <Link href="/controls">
            <a className={styles.link}>Controls</a>
          </Link>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;