import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return (
        <div className='text-center py-12 space-y-5'>
            <Image src={logo} width={300} height={200} alt='loge' className='mx-auto' />
            <div className='space-y-2.5'>
                <p className='text-gray-500'>Journalism Without Fear or Favour</p>
                <p>{format(new Date(), "EEEE, MMMM dd, yyy")}</p>
            </div>
        </div>
    );
};

export default Header;