import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <Layout home>
      <Head>
        <title>blog</title>
      </Head>

      <section className={utilStyles.sectionXL}>
        <div className={utilStyles.blogPost}>
          <p className={utilStyles.headingLg}>Sample Post</p>
          <p className={utilStyles.one}>
            Lorem ipsum, and other things like that.
          </p>
        </div>
      </section>
    </Layout>
  );
}
