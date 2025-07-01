import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='pb-16 text-center'>
      <p className=''>
        Copyright &copy; {currentYear} - <Link href='/'>The Blog</Link>
      </p>
    </footer>
  );
};

export default Footer;
