'use client';

import { placeholder } from '@/public/images';
import Image from 'next/image';

interface AvatarProps {
    src: string | null | undefined;
};

const Avatar: React.FC<AvatarProps> = ({
    src
}) => {
    return ( 
        <div className="">
            <Image
                className='rounded-full'
                height="30"
                width="30"
                alt='Avatar'
                src={src || placeholder}
            />
        </div>
     );
}
 
export default Avatar;