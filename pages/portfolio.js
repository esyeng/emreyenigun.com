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
        <h2 className={utilStyles.headingLg}>* StackTrack *</h2>
        <p className={utilStyles.headingMd}>
          {" "}
          Current occupation: building a self-documenting issue tracking service
          built entirely solo. Robust schema and data serving on the backend,
          currently catered to solo users to create issue tickets. Coming soon:
          Organizations, Teams, Project Management, Kanban board
          <Link href="https://stacktrack-esy.herokuapp.com/">
            <a>StackTrack</a>
          </Link>
        </p>

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
          location sharing. Presentation:{" "}
          <Link href="https://www.youtube.com/watch?v=g39o2qTqMTc">
            <a>Capstone: On My Way</a>
          </Link>
          <Link href="https://github.com/esyeng/onmyway">
            <a>Repo</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
