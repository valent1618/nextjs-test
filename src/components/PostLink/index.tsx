import Link from 'next/link';
import Date from '../Date';

export default function PostLink({
  id,
  title,
  date,
}: {
  id: string;
  title: string;
  date: string;
}) {
  return (
    <Link href={`/posts/${id}`}>
      <a className='post-link'>
        <h3>{title} &rarr;</h3>
        <Date dateString={date} />
      </a>
    </Link>
  );
}
