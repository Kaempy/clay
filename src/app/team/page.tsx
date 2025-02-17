import Luna from '@src/icons/luna';
import { Metadata } from 'next';
import Image from 'next/image';
import img from '../../../public/img-5.png';

export const metadata: Metadata = {
  title: 'Team',
};

const Team = () => {
  return (
    <main className="bg-texture  w-full h-full bg-primary bg-[50%,50%] min-h-screen">
      <p className="flex items-center px-6 pt-24 lg:px-16 lg:pt-32 lg:pb-8 pb-4">
        <Luna />
        <span className="text-base leading-4 italic">THE TEAM</span>
      </p>
      <section className="relative px-8 lg:px-20 w-full">
        <div className="w-full  max-w-[70rem]">
          <p className="lg:text-[2.5rem] text-2xl lg:leading-[2.875rem] font-medium">
            By working together creatively from the start of a project, our team
            combines their knowledge to devise integrated, sustainable design
            solutions.
          </p>
        </div>
      </section>
      <div className="px-6 py-12 lg:p-20 mx-auto">
        <Image
          src={img}
          alt="happy workers"
          width={1260}
          height={734}
          priority
          placeholder="blur"
          className="mx-auto object-contain"
        />
      </div>
    </main>
  );
};

export default Team;
