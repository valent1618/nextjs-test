import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Header() {
  const { pathname } = useRouter();

  return (
    <header id='Header'>
      <h2>
        {pathname === '/' ? 'Home' : <Link href='/'>&larr; Back to home</Link>}
      </h2>
      <Image
        src={'/images/profile.jpg'}
        height={200}
        width={200}
        alt=''
        className={pathname !== '/' ? 'reduce' : ''}
      />
    </header>
  );
}
