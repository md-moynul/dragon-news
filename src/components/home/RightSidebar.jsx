"use client"
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import swimming from '@/assets/swimming.png'
import playground from '@/assets/playground.png'
import bg from '@/assets/bg.png'
import Image from 'next/image';
import LoginWith from '../shared/LoginWith';

const RightSidebar = () => {
  
    return (
        <div className='space-y-6'>
            <div className='space-y-4'>
                <h2 className="font-bold text-2xl">Login with</h2>
                <LoginWith/>
            </div>
            <div className='space-y-4'>
                <h2 className="font-bold text-2xl">Find Us On</h2>
                <div className=''>
                    <div className='flex gap-2 items-center btn  border-gray-300 text-left justify-start'>
                        <FaFacebook size={25} className='text-blue-500' />
                        <p>Facebook</p>
                    </div>
                    <div className='flex gap-2 items-center btn  border-gray-300 text-left justify-start'>
                        <FaTwitter size={25} className='text-blue-400' />
                        <p>Twitter</p>
                    </div>
                    <div className='flex gap-2 items-center btn  border-gray-300 text-left justify-start'>
                        <FaInstagram size={25} className='text-red-300' />
                        <p>Instagram</p>
                    </div>

                </div>
            </div>
            <div className='space-y-5'>
                <h2 className="font-bold text-2xl text-gray-400">Q-Zone</h2>
                <Image src={swimming} alt='swimming children' width={250} height={250} />
                <Image src={playground} alt='playground' width={250} height={250} />
                <Image src={bg} alt='playground' width={250} height={250} />
            </div>
        </div>
    );
};

export default RightSidebar;