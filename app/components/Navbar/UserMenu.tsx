'use client';

import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar/Avatar';
import { useCallback, useState, useEffect } from 'react';
import MenuItem from './MenuItem';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';


interface UserMenuProps {
    currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    // const [isOpen, setIsOpen] = useState(false);

    const [toggleMenu, SettoggleMenu] = useState(false)
    const [windowWidth, SetwindowWidth] = useState(window.innerWidth)
    const toggleOpen = useCallback(() => {
        SettoggleMenu((value) => !value);
    }, [])
    useEffect(() => {
        const handleResize = () => {
            SetwindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    useEffect(() => {
        if (window.innerWidth < 700) {
            SettoggleMenu(false)
        }
    }, [windowWidth])

    // const toggleIsMenu =() => {
    //     SettoggleMenu(!toggleMenu)
    // }
    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-10">
                {/* <div
                    onClick={() => { }}
                    className="
                    hidden
                    md:block
                    text-sm
                    font-semibold
                    py-3
                    px-4
                    rounded-full
                    hover:bg-neutral-100
                    transition
                    cursor-pointer
                "
                >
                    Login
                </div>
                <div
                    onClick={() => { }}
                    className="
                    hidden
                    md:block
                    text-sm
                    font-semibold
                    py-3
                    px-4
                    rounded-full
                    hover:bg-neutral-100
                    transition
                    cursor-pointer
                "
                >
                    Register
                </div> */}
                <div
                    onClick={toggleOpen}
                    className={`p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition ${toggleMenu ? 'bg-gray-200' : ''
                        }`}
                >
                    <AiOutlineMenu />
                    <div className={toggleMenu && windowWidth >= 700 ? 'block' : 'hidden md:block'}>
                        <Avatar src={currentUser?.image} />
                    </div>
                </div>
            </div>

            {toggleMenu && (
                <div className='
                    absolute
                    rounded-xl
                    shadow-md
                    w-[40vw]
                    md:w-3/4
                    bg-white
                    overflow-hidden
                    right-0
                    top-12
                    text-sm
                    pr-40
                '>
                    <div className='flex flex-col cursor-pointer'>
                        {currentUser ? (
                            <>
                                <MenuItem
                                    onClick={() => { }}
                                    label='Profile'
                                />
                                <MenuItem
                                    onClick={registerModal.onOpen}
                                    label='Cart'
                                />
                                <hr />
                                <MenuItem
                                    onClick={() => signOut()}
                                    label='Logout'
                                />

                            </>
                        ) : (
                            <div className=''>
                                <MenuItem
                                    onClick={loginModal.onOpen}
                                    label='Login'
                                />
                                <MenuItem
                                    onClick={registerModal.onOpen}
                                    label='Register'
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserMenu;