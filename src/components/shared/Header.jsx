import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";
import Marquee from 'react-fast-marquee';

const breakingNews = [
    { id: 1, title: "🚨 AI is changing the future of web development" },
    { id: 2, title: "🌍 Global economy shows signs of recovery" },
    { id: 3, title: "⚽ Championship final kicks off tonight" },
    { id: 4, title: "📱 New smartphone release shocks the market" },
    { id: 5, title: "🌦️ Heavy rain alert issued in multiple regions" },
];
const Header = () => {
    return (
        <div className='text-center py-12 space-y-5 px-5 md:px-0'>
            <Image src={logo} width={300} height={200} alt='loge' className='mx-auto' />
            <div className='space-y-2.5'>
                <p className='text-gray-500'>Journalism Without Fear or Favour</p>
                <p>{format(new Date(), "EEEE, MMMM dd, yyy")}</p>
            </div>
            <div className='container mx-auto bg-gray-100 py-4 px-3 flex rounded-2xl'>
                <button className='btn bg-red-600 text-white'>Latest</button>
                <Marquee pauseOnHover={true} speed={60}>
                    <div className='space-x-20 px-4'>
                        {breakingNews.map(news => <span key={news.id}>{news.title}</span>)}
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default Header;