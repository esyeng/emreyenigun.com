import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi there, my name is Emre Scattergood Yenigun, and I'm an NJ based
          full-stack software engineer specializing in Node.js. Glad you made
          it.
        </p>
        <Link href="/posts/first-post">
          <a>about me</a>
        </Link>
      </section>
    </Layout>
  );
}
