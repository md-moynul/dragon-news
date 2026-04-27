import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { GoArrowLeft } from 'react-icons/go';
import { IoStar } from 'react-icons/io5';
const NewsDetailsCard = ({ news }) => {
    const { _id, author, details, image_url,  title,category_id  } = news;
    // console.log(_id);

    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
                <div className='bg-slate-200 px-5 py-3 flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                        <Image src={author.img} alt={`${author.name}`} width={30} height={30} className='rounded-full' />
                        <div className='space-y-1'>
                            <p className=' font-bold'>{author.name ? author.name : 'Jon smith'}</p>
                            <p className='text-xs text-gray-500'>{author.published_date}</p>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <CiBookmark size={25} color='gray' />

                        <CiShare2 size={25} color='gray' />
                    </div>
                </div>
                <div className="card-body space-y-4">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <figure>
                        <Image src={image_url} alt={title} width={520} height={265} className='w-full' />
                    </figure>
                    <div className='mb-4 text-gray-500'>
                        <p className=''>{details}</p>
                    </div>
                    <Link href={`/category/${category_id}`}>
                        <button className='btn bg-red-500 text-white'><GoArrowLeft size={25}/>All news in this category</button>
                    </Link>
                    
                </div>

            </div>
        </div>
    );
};

export default NewsDetailsCard;