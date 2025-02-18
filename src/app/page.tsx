import { Metadata } from 'next';
// import Image from 'next/image';
// import home from '../../public/home-bg.png';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Home | Clay',
};

const HomePage = dynamic(() => import('../components/home'));

const Home = () => <HomePage />;

// const Home = () => {
//   return (
//     <main className="relative w-full grid items-end min-h-screen md:px-[6.25rem] lg:px-6 xl:px-[6.25rem] p-6">
//       <Image
//         src={home}
//         alt="home bg"
//         fill
//         quality={90}
//         priority
//         placeholder="blur"
//         className="absolute inset-0 z-0 object-cover w-full h-full"
//       />
//       <footer className="flex flex-col xl:flex-row gap-8 lg:gap-0 relative items-end justify-between">
//         <p className="xl:font-medium font-semibold text-[1.75rem] leading-9 md:text-4xl xl:leading-[5.0313rem] xl:text-[4.375rem] w-full max-w-[450px] xl:max-w-[59.375rem]">
//           The Art of Transforming Nature into Legacies
//         </p>
//         <p className="uppercase text-[.625rem] w-full max-w-[10rem] leading-[.9375rem] text-right">
//           TIMELESS, MODERN & SUSTAINABLE HOMES, SETTING THE NEW LUXURY STANDARD
//         </p>
//       </footer>
//     </main>
//   );
// };

export default Home;
