'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import home from '../../public/home-bg.png';
const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 25;
      const y = (e.clientY / innerHeight - 0.5) * 25;

      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative w-full grid items-end min-h-screen md:px-[6.25rem] lg:px-6 xl:px-[6.25rem] p-6 overflow-hidden">
      <Image
        src={home}
        alt="home bg"
        fill
        quality={90}
        priority
        placeholder="blur"
        className="absolute inset-0 z-0 object-cover w-full h-full transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(1.15)`,
        }}
      />
      <footer className="flex flex-col xl:flex-row gap-8 lg:gap-0 relative items-end justify-between">
        <p className="font-medium text-[3.125rem] leading-[3.5625rem] md:text-4xl xl:leading-[5.0313rem] xl:text-[4.375rem] w-full max-w-[450px] xl:max-w-[59.375rem]">
          The Art of Transforming Nature into Legacies
        </p>
        <p className="uppercase text-[.625rem] w-full max-w-[10rem] leading-[.9375rem] text-right">
          TIMELESS, MODERN & SUSTAINABLE HOMES, SETTING THE NEW LUXURY STANDARD
        </p>
      </footer>
    </main>
  );
};

export default Home;
