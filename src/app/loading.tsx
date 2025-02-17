import Image from 'next/image';
import logo from '../../public/logo.png';
const Loading = () => {
  return (
    <div className="bg-texture bg-primary bg-[50%,50%] min-h-screen grid items-center justify-center">
      <Image
        src={logo}
        alt="accelerate logo"
        className="object-contain"
        width={220}
        height={57}
        priority
      />
    </div>
  );
};

export default Loading;
