import Image from 'next/image';

const Logo = () => {
  return (
    <div className="logo-container m-0 p-0 sticky">
      <Image
        src="/courses/logo/Phot_logo.png" // Replace with your logo's path
        alt="Logo"
        className='m-0 p-0'
        width={300} // Adjust the width as needed
        height={50} // Adjust the height as needed
      />
    </div>
  );
};

export default Logo;