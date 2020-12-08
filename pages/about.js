import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function About() {
  return (
    <Layout>
      <Head>
        <title>about</title>
      </Head>
      <section className={utilStyles.section}>
        <h1 className={utilStyles.headingXl}>- Bio -</h1>
        <p>
          After gracing the stage as a comic and dramatist, structuring
          wireframes and journal pages as a designer, and systematically
          evaluating number variance as a data scientist, Emre found himself in
          new territory at the beginning of 2020 when he decided to learn how to
          code. Comfortable with both computers and with people, he began his
          post-collegiate career in education, with a focus on leading the next
          generation of digitally literate learners.
        </p>
        <p>
          As a result of combing through the documentation of the International
          Society for Technology in Education and devising coding lesson plans
          for young students, Emre took an interest in the low-level details of
          the computer science concepts he was tasked with translating to a
          younger audience. Enthralled by the experience, he set himself to
          learn to code in his spare time.
        </p>

        <p>
          When the CoVID-19 pandemic hit, it put a halt to his employment.
          However, this left open an opportunity to dive deeper into CS and
          programming. Six months later, Emre graduated from the software
          engineering immersive program at Fullstack Academy in NY, blown away
          by the possibilities this new skillset opened up for him.
        </p>

        <p>
          A lifelong creative and tinkerer, it was only a matter of time until
          he found himself addicted to writing code. Poised to build on his
          hard-earned skill, he's ready to take the next step; to synthesize
          prior lessons from other fields into an avenue of technical innovation
          and community building excellence.
        </p>
      </section>
    </Layout>
  );
}
