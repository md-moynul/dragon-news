import React from 'react';
import logo from '@/assets/user.png'
import Image from 'next/image';
import NavLinks from './NavLinks';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='container mx-auto flex justify-between items-center py-5'>
            <div></div>
            <div>
                <ul className='flex gap-2 text-gray-500'>
                    <li><NavLinks href={'/'}>Home</NavLinks></li>
                    <li><NavLinks href={'/about'}>About</NavLinks></li>
                    <li><NavLinks href={'/contact'}>Contact</NavLinks></li>
                </ul>
            </div>
            <div className='flex gap-2 items-center'>
                <Image src={logo} alt={"logo"} width={30} height={30} />
                <Link href={'/login'}><button className="btn bg-gray-600 text-white ">Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;