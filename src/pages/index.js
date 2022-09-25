import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import PostLink from '../components/PostLink';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <div id='Home'>
      <h1 className='title'>
        Try <Link href='/counter'>the counter!</Link>
      </h1>

      <p className='description'>
        Get started by editing <code>pages/index.js</code>
      </p>

      <section>
        <ul className='blogs-container'>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <PostLink id={id} title={title} date={date} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
