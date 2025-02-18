import Luna from '@src/icons/luna';
import { Metadata } from 'next';
import Image from 'next/image';
import img5 from '../../../public/img-10.png';
import img1 from '../../../public/img-6.png';
import img2 from '../../../public/img-7.png';
import img3 from '../../../public/img-8.png';
import img4 from '../../../public/img-9.png';

export const metadata: Metadata = {
  title: 'Projects',
};

const items = [
  {
    id: '1',
    img: img1,
    title: 'THE HORIZON RESIDENCE',
    year: 2024,
  },
  {
    id: '2',
    img: img2,
    title: 'URBAN OASIS',
    year: 2024,
  },
  {
    id: '3',
    img: img3,
    title: 'The Pinnacle',
    year: 2024,
  },
  {
    id: '4',
    img: img4,
    title: 'THE WORKSPACE',
    year: 2023,
  },
  {
    id: '5',
    img: img5,
    title: 'Sierra Coastal Retreat',
    year: 2023,
  },
];
const Projects = () => {
  return (
    <main className="bg-texture px-6 md:px-[6.25rem] lg:px-6 xl:px-[6.25rem] w-full h-full bg-primary bg-[50%,50%] min-h-screen">
      <p className="flex items-center pt-24 lg:pt-32 lg:pb-8 pb-4">
        <Luna />
        <span className="text-base leading-[15px] italic">PROJECTS</span>
      </p>
      <section className="relative lg:p-8 w-full">
        <div className="w-full  max-w-[70rem]">
          <p className="lg:text-[2.5rem] text-2xl lg:leading-[2.875rem] font-medium">
            At Clay, we pride ourselves on creating timeless architectural
            masterpieces that blend modern sophistication with functional
            design, while bringing our clients closer to nature.
          </p>
        </div>
      </section>
      <div className=" py-12 grid lg:grid-cols-2 items-center justify-center lg:gap-x-10 gap-x-7 gap-y-12 lg:gap-y-16 mx-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className="gap-3 flex flex-col justify-center w-full"
          >
            <div className="overflow-hidden">
              <Image
                src={item.img}
                alt="happy workers"
                width={605}
                height={350}
                priority
                placeholder="blur"
                className="mx-auto w-full object-contain transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>

            <p className="flex gap-2 ">
              <span className="text-[.75rem] leading-[.9375rem] uppercase font-medium">
                {item.title}
              </span>
              <small className=" text-primary-light leading-4">•</small>
              <span className="text-[.75rem] leading-[.9375rem] text-primary-light font-medium">
                {item.year}
              </span>
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
