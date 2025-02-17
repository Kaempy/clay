import Close from '@src/icons/close';
import Menu from '@src/icons/menu';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import logo from '../../public/logo.png';

const Navbar = () => {
  const params = useSearchParams();
  const router = useRouter();
  return (
    <header className="fixed left-0 top-0 z-10 m-auto flex w-full items-center justify-between px-6 py-[1.3125rem] tablet:px-20 laptop:px-6 desktop:px-20">
      <Link href="/">
        <Image
          priority
          src={logo}
          alt="Clay logo"
          width={219}
          height={57.39}
          placeholder="blur"
          className="object-contain w-[120px] lg:w-auto"
        />
      </Link>
      <span
        className="cursor-pointer"
        onClick={() =>
          params.get('menu') === 'true'
            ? router.push('?')
            : router.push('?menu=true')
        }
      >
        {params.get('menu') === 'true' ? <Close /> : <Menu />}
      </span>
    </header>
  );
};

export default Navbar;
