import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Resume() {
  return (
    <Layout home>
      <Head>
        <title>resume</title>
      </Head>

      <section className={utilStyles.section}>
        <Link href="https://drive.google.com/file/d/1ygBrf5xyd-2D3F9I4LOXWIps_VPxGR0k/view?usp=sharing">
          <a>View PDF</a>
        </Link>
      </section>
    </Layout>
  );
}
