'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLinks = ({href , children ,className}) => {
    const pathName = usePathname();
    console.log(pathName);
    
    const isActive = pathName === href;
    return (
        <Link href={href} className={`${isActive && 'border-b-2 border-b-purple-500'}`}>{children}</Link>
    );
};

export default NavLinks;