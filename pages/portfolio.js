import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>portfolio</title>
      </Head>
      <section className={utilStyles.section}>
        <h2 className={utilStyles.headingLg}>* Scoobyasso *</h2>
        <p className={utilStyles.headingMd}>
          {" "}
          Emre's first full-stack web application built on a team, (grouped by
          fullstack instructors into groups of four named after scooby-doo
          characters), Scoobyasso is a prototype eCommerce site built from the
          ground up in React and Node. It is designed as an open marketplace for
          art collectors and vendors. Heroku Site:{" "}
          <Link href="https://gs-scoobyasso.herokuapp.com/">
            <a>Scoobyasso</a>
          </Link>
        </p>
        <h2 className={utilStyles.headingLg}>* On My Way *</h2>
        <p className={utilStyles.headingMd}>
          Capping off a tremendous few months of code, Emre's capstone project
          was built in React Native for iOS and Android, utilizing the Google
          Cloud Platform and Socket.io to allow for multi-user real-time
          location sharing. The impetus for this app was to serve as a companion
          app to people 'contact-tracing' their loved ones in the concern of
          safe-transportation. App Store + Play Store release TBD. Presentation:{" "}
          <Link href="https://www.youtube.com/watch?v=g39o2qTqMTc">
            <a>Capstone: On My Way</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
