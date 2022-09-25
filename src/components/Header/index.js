import Link from 'next/link';
import Image from 'next/image';

export default function Header({ page }) {
  return (
    <header id='Header'>
      <h2>
        {page === 'Home' ? 'Home' : <Link href='/'>&larr; Back to home</Link>}
      </h2>
      <Image
        src={'/images/profile.jpg'}
        height={200}
        width={200}
        alt=''
        className={page !== 'Home' ? 'reduce' : ''}
      />
    </header>
  );
}
