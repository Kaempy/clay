import Luna from '@src/icons/luna';
import { Metadata } from 'next';
import Image from 'next/image';
import clay from '../../../public/clay.png';
import img1 from '../../../public/img-1.png';
import img2 from '../../../public/img-2.png';
import img3 from '../../../public/img-3.png';
import img4 from '../../../public/img-4.png';

const imgSlides = [img1, img2, img3, img4];

const coreValues = [
  {
    key: '01',
    title: 'Craftmanship',
    desc: 'We believe in the mastery of design and construction, paying meticulous attention to detail in every project.',
  },
  {
    key: '02',
    title: 'Sustainability',
    desc: 'We are committed to eco-friendly practices, using sustainable materials and methods that benefit both our clients and the environment.',
  },
  {
    key: '03',
    title: 'Innovation',
    desc: 'We embrace modern technology and design innovation, ensuring our homes are both timeless and forward-thinking.',
  },
  {
    key: '04',
    title: 'Integrity',
    desc: 'We uphold the highest standards of honesty, transparency, and ethical practices in all our dealings.',
  },
  {
    key: '05',
    title: 'Quality',
    desc: 'We prioritize enduring quality, ensuring that every home we build stands the test of time in both design and construction.',
  },
  {
    key: '06',
    title: 'Nature-Inspired Design',
    desc: 'We draw inspiration from the natural world, integrating nature’s beauty and harmony into our homes.',
  },
  {
    key: '07',
    title: 'Customer-Centricity',
    desc: 'We are dedicated to enhancing the living experiences of our clients, ensuring that their needs and expectations are met with excellence.',
  },
  {
    key: '08',
    title: 'Legacy',
    desc: 'We focus on creating homes that make a lasting impact, building legacies for future generations.',
  },
];

export const metadata: Metadata = {
  title: 'About',
};

const About = () => {
  return (
    <main className="bg-texture w-full h-full bg-primary bg-[50%,50%] min-h-screen">
      <p className="flex items-center md:px-[6.25rem] lg:px-6 xl:px-[6.25rem] p-6 pt-20 lg:pt-32 pb-4 lg:pb-8">
        <Luna />
        <span className="text-base leading-[.9375rem] italic">ABOUT CLAY</span>
      </p>
      <section className="relative md:px-[6.25rem] lg:px-6 xl:px-[6.25rem] p-6 w-full h-[12.5rem] lg:h-[24.3125rem]">
        <Image
          src={clay}
          alt="clay"
          fill
          quality={90}
          priority
          placeholder="blur"
          className="absolute"
        />
        <div className="absolute top-8 lg:px-8 lg:top-16 max-w-[928px]">
          <p className="text-primary-light text-base leading-[.9375rem]">
            VISION
          </p>
          <p className="lg:text-[40px] text-2xl lg:leading-[46px] font-medium">
            To design & build timeless, modern, and sustainable homes that set
            new standards for luxury and enduring quality.
          </p>
        </div>
      </section>
      <div className="flex md:px-[6.25rem] lg:px-6 xl:px-[6.25rem] p-6 items-center justify-end">
        <div className="w-full  max-w-[928px]">
          <p className="text-primary-light text-base leading-[.9375rem]">
            MISSION
          </p>
          <p className="lg:text-[40px] text-2xl lg:leading-[46px] font-medium">
            Clay is dedicated to creating luxurious, sustainable properties that
            combine design and modern innovation to elevate living experiences
            while bringing us closer to nature.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center my-16 gap-1">
        {imgSlides.map((item, i) => (
          <div key={i} className="overflow-hidden">
            <Image
              src={item}
              alt={`slide ${i}`}
              className="object-cover aspect-auto transition-transform duration-300 ease-in-out hover:scale-105"
              placeholder="blur"
            />
          </div>
        ))}
      </div>
      <div className="md:p-[6.25rem] lg:p-6 xl:p-[6.25rem] p-6">
        <p className="text-primary-light text-base leading-[.9375rem] mb-12">
          CORE VALUES
        </p>
        <ul>
          {coreValues.map((value) => (
            <li key={value.key}>
              <div className="flex flex-col md:flex-row w-full lg:mb-16 lg:pt-8 border border-white/40 border-x-0 border-b-0 gap-4 mb-8 pt-4 lg:gap-8">
                <div className="flex w-full items-center gap-3 lg:gap-6">
                  <p className="lg:text-[28px] text-lg lg:leading-8 font-medium">
                    {value.key}
                  </p>
                  <p className="lg:text-[40px] text-2xl lg:leading-[46px] font-medium">
                    {value.title}
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-primary-light max-w-[546px] text-base lg:leading-[1.5094rem] lg:text-[1.3125rem]">
                    {value.desc}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default About;
