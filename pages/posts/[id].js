import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }) {
  console.log("postDate:", postData);
  //console.log("paths:", paths);
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  // id로 유효한 값들을 리스트 형태로 리턴
  const paths = getAllPostIds();
  return {
    paths, //getAllPistIds() 로 부터 리턴된 paths로 이루어진 배열을 포함하는데, 이는 pages/posts/[id].js로 정의된 params를 포함한다.
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // 주어진 id의 블로그 포스트에 필요한 데이터를 fetch 해오기 위해서
  // id가 포함된 params를 넘거줌
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
