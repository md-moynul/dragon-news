import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { IoStar } from 'react-icons/io5';

// author
// : 
// {name: 'Jennifer Wood', published_date: '2022-08-30 16:38:45', img: 'https://images.unsplash.com/photo-1633332755192-72…HxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'}
// category_id
// : 
// "02"
// details
// : 
// "Tucker Carlson has rarely met a dictator's ass he didn't want to kiss, and Vladimir Putin is at the very top of that puckering up list. The Fox News host is something of a folk hero in Russia: Because of the pro-Putin propaganda he so often spews, the Kremlin has encouraged Russia's state TV to air as much of Tucker's face as possible — and they're certain to love his latest rant about how Putin is winning the war in Ukraine, which does not seem to be the case. But on Fox News, what Tucker says goes."
// image_url
// : 
// "https://i.ibb.co/BZZ5WKv/unsplash-Eh-Tc-C9s-YXsw-4.png"
// others_info
// : 
// {is_todays_pick: false, is_trending: true}
// rating
// : 
// {number: 4.3, badge: 'Excellent'}
// thumbnail_url
// : 
// "https://i.ibb.co/k8XBcMX/unsplash-Eh-Tc-C9s-YXsw-15.png"
// title
// : 
// "Tucker Carlson Swears Vladimir Putin Is Winning The War In Ukraine"
// total_view
// : 
// 400
// _id
// : 
// "f69a695f037cd9484cecaea37ca71012"
const NewsCard = ({ news }) => {
    const { _id, author, details, image_url, rating, title, total_view } = news;
    console.log(_id);
    
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
                <div className="card-body">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <figure>
                        <Image src={image_url} alt={title} width={520} height={265} className='w-full' />
                    </figure>
                    <div className='mb-4'>
                        <p className='line-clamp-4'>{details}</p>
                        <Link href={`/category/${_id}`}>
                            <button className='btn bg-yellow-500 text-white'>Read More</button>
                        </Link>

                    </div>
                    <hr className='text-gray-300 ' />
                    <div className='flex justify-between py-5'>
                        <div className='flex gap-2 items-center '>
                            <IoStar size={16} className='text-yellow-500' />
                            <IoStar size={16} className='text-yellow-500' />
                            <IoStar size={16} className='text-yellow-500' />
                            <IoStar size={16} className='text-yellow-500' />
                            <IoStar size={16} className='text-yellow-500' />
                            <p className=' text-gray-500 font-bold'>{rating.number}</p>
                        </div>
                        <div className='flex gap-2 items-center text-gray-700'>
                            <FaEye size={20} />
                            <p>{total_view}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NewsCard;