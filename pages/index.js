import { getSortedPostsData } from "../lib/posts";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";

export default function Home({ allPostsData }) {
  console.log("allPostDate:", allPostsData);
  return (
    <Layout home>
      <Head>
        <title>Title</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello</p>
        <p>
          (This is a sample website - you’ll be building a site like this on our{" "}
          <a href="https://nextjs.org/learn" className={utilStyles.link}>
            Next.js tutorial
          </a>
          .)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a className={utilStyles.link}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
