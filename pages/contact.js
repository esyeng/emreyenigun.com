import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <Layout home>
      <Head>
        <title>contact</title>
      </Head>

      <section className={utilStyles.section}>
        <div>
          <Link href="https://www.linkedin.com/in/esyenigun?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bsz2OHOImSpadbMyttYbb1A%3D%3D">
            <a>LinkedIn</a>
          </Link>
        </div>
        <div>
          <Link
            href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=emre@emreyenigun.com&tf=1`}
          >
            <a>emre@emreyenigun.com</a>
          </Link>
        </div>
        <div>
          <Link href="https://github.com/esyeng">
            <a>GitHub</a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
