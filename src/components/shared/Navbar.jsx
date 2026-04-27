'use client'
import React from 'react';
import logo from '@/assets/user.png'
import Image from 'next/image';
import NavLinks from './NavLinks';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { LuLogOut } from 'react-icons/lu';


const Navbar = () => {
    const { data: session,isPending } = authClient.useSession()
    const user = session?.user;
    console.log(user);


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
            <div>
                {isPending? <span className="loading loading-spinner text-accent"></span> : user ? <div className='flex gap-2 items-center'>
                    <p>Hello {user.name}</p>
                    <Image src={user.image || logo} className='rounded-full' alt={"logo"} width={30} height={30} />
                    <button onClick={async() => {await authClient.signOut();}} className="btn  "><LuLogOut /></button>
                </div> : <Link href={'/login'}><button className="btn bg-gray-600 text-white ">Login</button></Link>}
            </div>
        </div>
    );
};

export default Navbar;