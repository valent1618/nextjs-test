import Link from 'next/link';
import { getSortedPostsData } from '../utils/posts';
import PostLink from '../components/PostLink';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({
  allPostsData,
}: {
  allPostsData: { id: string; date: string; title: string }[];
}) {
  return (
    <div id='Home'>
      <h1 className='title'>
        Try <Link href='/counter'>the counter!</Link>
      </h1>

      <p className='description'>
        Get started by editing <code>pages/index.tsx</code>
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
