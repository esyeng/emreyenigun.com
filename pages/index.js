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

      <section className={utilStyles.section}>
        <p>
          <h2 className={utilStyles.headingMd}>Hi there</h2>
          <h3 className={utilStyles.one}>
            My name is Emre Scattergood Yenigun
          </h3>
          <h3 className={utilStyles.two}>
            I'm an NJ based backend web developer
          </h3>
          <h3 className={utilStyles.three}>Glad you made it.</h3>
        </p>
        <Link href="/about" className={utilStyles.link}>
          <a className={utilStyles.link}>About me</a>
        </Link>
      </section>
    </Layout>
  );
}
