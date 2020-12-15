import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { Navbar, PageBody } from "./navbar";

const name = "Emre Yenigun";
export const siteTitle = "emreyenigun.com";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar>
        <Link href="/">
          <a className="headLink">Home</a>
        </Link>
        <Link href="/about">
          <a className="headLink">About</a>
        </Link>
        <Link href="/portfolio">
          <a className="headLink">Portfolio</a>
        </Link>
        <Link href="/contact">
          <a className="headLink">Contact</a>
        </Link>
        <Link href="/blog">
          <a className="headLink">Blog</a>
        </Link>
      </Navbar>

      <header className={styles.header}>
        {home ? (
          <>__________________________</>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/profile.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingXl}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <div className={utilStyles.footCon}>
        <footer className={utilStyles.foot}>@ 2020 - Emre Yenigun </footer>
      </div>
    </div>
  );
}
