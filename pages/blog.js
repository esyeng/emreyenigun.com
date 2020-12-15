import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <Layout home>
      <Head>
        <title>blog</title>
      </Head>

      <section className={utilStyles.sectionXL}>
        <div className={utilStyles.blogPost}>
          <p className={utilStyles.headingXl}>Blog</p>
          <header className={styles.header}>
            ________________________________________
          </header>
          <p className={utilStyles.headingLg}>
            2020 Retrospective: Powerful Progress in a Brutal Year
          </p>
          <img
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            src="https://www.dropbox.com/s/2t7tspd9m4ezqg8/comppic.jpg?raw=1"
          ></img>

          <p className={utilStyles.headingBmd}>December 15, 2020</p>
          <p className={utilStyles.blogText}>
            On December 15, 2019, I was having a tough time in life. Age 23, I
            was a recent college graduate preparing to enter a new decade and
            professionally, a new stage in life. I found myself at the
            crossroads between the last vestiges of youth and the first
            hardships and triumphs of adulthood.
          </p>

          <p className={utilStyles.blogText}>
            My reality was bleak, or at least that's how I viewed it at the
            time. I had graduated with a degree in a field I had little
            professional interest in, and without the strongest connections to
            jumpstarter internship opportunities. Despite being exceptionally
            active as a student, I realized I had failed to map out the next
            steps as well as some of my peers. I chalk it up to being uncertain
            about what to devote myself to; in a world of specialists one must
            learn to specialize.
          </p>
          <p className={utilStyles.blogText}>
            So the portrait is as follows: Spent summer in a brief stint as a
            retail data collector, a job taking anybody and at all times.
            Sensing a full-stop dead end, I quit after 2 months. So instead of
            pursuing the first source of money that I could give my labor to, I
            leaned upon my extensive experience in education to try and land my
            first professional position as a teacher and begin to save for what
            I was planning to do at the time, move to Japan to teach English.
          </p>
          <p className={utilStyles.blogText}>
            I had wanted to live in Japan for years and saw teaching as the
            surest way to get there. Not having a plan turned into saving for a
            ticket and applying to programs, this would be the adventure to pull
            me out of my parents house and into the world proper. Two things
            happened that would subvert this plan entirely: I found a best
            friend and a partner whom I now live with, and I discovered my love
            for writing code.
          </p>
          <p className={utilStyles.blogText}>
            The most pivotal and transformative career moment was when I applied
            and interviewed for a teaching position at the newly opened
            bilingual preschool, Tessa International School in Hoboken, NJ.
            Though I would be called upon for ESOL and Drama instruction, Tessa
            primarily needed a young tech savy professional who would radically
            alter the course of it's instruction with a focus on code, digital
            literacy, internet safety, and everyday engineering for the young
            children of a new generation. Considering this was happening while I
            was developing a relationship, the move to Japan was put on the
            backburner, something time has shown to be the right choice.
          </p>
          <p className={utilStyles.blogText}>
            Though I hadn't ever written software, I had spent most of my life
            as a file explorer and avid tech enthusiast. I always wanted the
            newest gadget so I could put it through its paces and learn how to
            leverage the new technology for my own enjoyment and understanding.
            This meant modding video games to allow for custom visuals and
            content, installing alternative operating systems on my phone to
            allow for a desktop experience, and keeping pace with the growing
            importance of privacy in the new frontier of unrestricted flow of
            personal data. I was on the sidelines ready to jump in to the deep
            end but just needed a nudge.
          </p>
          <p className={utilStyles.blogText}>
            I installed an app on my phone called Grasshopper, a program
            advertised as the most inviting way to learn to code. Its focus was
            on modular challenges that involved moving pieces of JavaScript
            statements around to alter the behavior of a grid of boxes on a
            console. Without actually typing, the gamified challenges were
            expertly designed bite size coding lessons, slowly revealing the
            power in one's hand when equipped with the capability to instruct
            machines. It was entirely too easy, as I was able to clear the whole
            intro course within a couple days of practicing during my commute.
          </p>
          <img
            className={utilStyles.blogImg}
            src="https://www.dropbox.com/s/3cm0tx3ijb5xrxe/grashop.jpg?raw=1"
          ></img>
          <p className={utilStyles.caption}>My first little triumph</p>
          <p className={utilStyles.blogText}>
            I was hooked, but I wanted the real thing, not a series of games
            probably intended for 6th graders. I started researching pathways to
            learn. Sure there was self taught, but knowing my tendencies to get
            lost in the shuffle of things without a carefully curated curriculum
            and deadline schedule, I set my sights on preparing for a bootcamp
            that I would be ready to attend come summertime, when I had a break
            from my teaching job. I would simply spend hours outside of work
            reading and writing elementary JavaScript until I was able to
            immerse in an intensive program.
          </p>
          <p className={utilStyles.blogText}>
            Ah but then, of course, the other pivotal thing to happen in
            December (in a much more real sense), was the first spread of the
            novel Coronavirus, CoVID-19 to be precise. It had finally caught up
            to us in New York in March, though realistically we should have been
            locked down earlier than this if it weren't for a certain
            catastrophe of a presidential administration. Right there with many
            others, I lost my only source of income, and was forced to stay
            inside. Guess it was time for bootcamp.
          </p>
          <p className={utilStyles.blogText}>And so it was ...</p>
        </div>
      </section>
    </Layout>
  );
}
