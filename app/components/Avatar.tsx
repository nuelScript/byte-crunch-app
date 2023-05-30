'use client';

import { placeholder } from '@/public/images';
import Image from 'next/image';

const Avatar = () => {
    return ( 
        <div className="">
            <Image
                className='rounded-full'
                height="30"
                width="30"
                alt='Avatar'
                src={placeholder}
            />
        </div>
     );
}
 
export default Avatar;