import Image from 'next/image';

const Avatar = () => {
  return (
    <div className="w-16 h-16 rounded-full overflow-hidden">
      <Image src="/img/x.png" alt="Avatar" width={64} height={64} />
    </div>
  );
};

export default Avatar;
