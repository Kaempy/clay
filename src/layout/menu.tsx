import Image from 'next/image';
import Link from 'next/link';
import bg from '../../public/menu.png';

const Menu = () => {
  const menu = [
    {
      name: 'About Clay',
      link: '/about',
    },
    {
      name: 'The Team',
      link: '/team',
    },
    {
      name: 'Projects',
      link: '/projects',
    },
  ];
  const addresses = [
    {
      name: '+44 123 456 7890',
      link: 'tel:+441234567890',
    },
    {
      name: 'info@clay.co.uk',
      link: 'mailto:info@clay.co.uk',
    },

    {
      name: '5th Floor 167-169, Great Portland Street, London W1W 5PF',
      link: 'https://maps.app.goo.gl/J2u7JwHdvzVM8nig9',
    },
  ];
  const year = new Date().getFullYear();
  return (
    <main className="xl:grid-cols-2 w-full grid min-h-screen">
      <section className="relative overflow-hidden xl:block w-full h-full">
        <Image
          src={bg}
          alt="bg"
          fill
          quality={90}
          priority
          className="object-cover aspect-auto transition-transform duration-300 ease-in-out hover:grayscale-[50%]"
          placeholder="blur"
        />
      </section>
      <section className="bg-texture justify-between relative w-full flex-col h-full bg-primary flex items-start bg-contain min-h-screen px-6 py-[6.25rem] xl:p-[6.25rem]">
        <nav className="w-full">
          <p className="text-primary-light text-sm my-6 xl:my-12 leading-[.9375rem]">
            MENU
          </p>
          <ul className="flex gap-4 xl:gap-8 items-start justify-center flex-col">
            {menu.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="text-white hover:text-primary-light font-medium text-2xl xl:text-[40px] xl:leading-[46px] no-underline"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <footer className="w-full">
          <div className="flex items-end justify-between">
            <ul className="flex gap-2 w-full max-w-[180px] items-start justify-center flex-col">
              {addresses.map((address) => (
                <li key={address.link}>
                  <Link
                    href={address.link}
                    className="text-[11px] text-white hover:underline -tracking-tighter uppercase leading-4"
                  >
                    {address.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex gap-2 items-center justify-center">
              <li>
                <Link
                  href="/#"
                  className="text-[11px] text-white underline -tracking-tighter uppercase leading-4"
                >
                  facebook
                </Link>
              </li>
              <li>
                <small className="text-[10px] uppercase leading-4">•</small>
              </li>
              <li>
                <Link
                  href="/#"
                  className="text-[11px] text-white underline -tracking-tighter uppercase leading-4"
                >
                  instagram
                </Link>
              </li>
              <li>
                <small className="text-[10px] uppercase leading-4">•</small>
              </li>
              <li>
                <Link
                  href="/#"
                  className="text-[11px] text-white underline -tracking-tighter uppercase leading-4"
                >
                  linkedin
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6" />
          <div className="items-center justify-between gap-4 flex">
            <p className="text-[10px] text-white -tracking-tighter uppercase leading-4">
              © {year} Clay LTD.
            </p>
            <ul className="flex gap-2 items-center justify-center">
              <li>
                <Link
                  href="/#"
                  className="text-[10px] hover:text-primary-light text-white uppercase leading-4"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <small className="text-[10px] text-white uppercase leading-4">
                  •
                </small>
              </li>
              <li>
                <Link
                  href="/#"
                  className="text-[10px] hover:text-primary-light text-white uppercase leading-4"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </section>
    </main>
  );
};

export default Menu;
