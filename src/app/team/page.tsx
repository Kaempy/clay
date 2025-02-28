import Luna from '@src/icons/luna';
import { Metadata } from 'next';
import Image from 'next/image';
import img from "../../../public/img-5.jpg";

export const metadata: Metadata = {
  title: 'Team',
};

const Team = () => {
  return (
    <main className="bg-texture px-6 md:px-[6.25rem] lg:px-6 xl:px-[6.25rem]   w-full h-full bg-primary bg-[50%,50%] min-h-screen">
      <p className="flex items-center pt-24 lg:pt-32 lg:pb-8 pb-4">
        <Luna />
        <span className="text-base leading-[15px] italic">THE TEAM</span>
      </p>
      <section className="relative lg:p-8 w-full">
        <div className="w-full  max-w-[69.9375rem]">
          <p className="lg:text-[2.5rem] text-2xl lg:leading-[2.875rem] font-medium">
            By working together creatively from the start of a project, our team
            combines their knowledge to devise integrated, sustainable design
            solutions.
          </p>
        </div>
      </section>
      <div className="py-12 mx-auto">
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
