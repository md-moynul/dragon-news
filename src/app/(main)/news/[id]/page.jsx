import NewsDetailsCard from '@/components/home/NewsDetailsCard';
import RightSidebar from '@/components/home/RightSidebar';
import { getNewsById } from '@/lib/data';
import React from 'react';
export async function generateMetadata({ params }) {
    const {id} = await params;
  const news =await getNewsById(id);
  console.log(news);
  
  return {
    title: news.title,
    description: news.details,
  }
 }
const NewsDetails = async ({ params }) => {
    const { id } = await params;
    // console.log(id);
    const news = await getNewsById(id)
    // console.log(news);

    return (
        <div className="container mx-auto grid grid-cols-14 gap-4 py-10 md:py-15">
            <div className="col-span-3 "></div>
            <div className="col-span-8 "><NewsDetailsCard news={news} /></div>
            <div className="col-span-3 "><RightSidebar /></div>
        </div>
    );
};

export default NewsDetails;