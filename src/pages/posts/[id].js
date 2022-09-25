import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/Date';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <div className='Post'>
      <h2>
        {postData.title}
        <br />
        <Date dateString={postData.date} />
      </h2>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}
