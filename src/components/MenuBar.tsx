import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoAnimation from './LogoAnimation';

interface Props {
    // Define your component props here
}

const MenuBar: React.FC<Props> = (props) => {
    const location = useLocation();

    return (
        <div className='flex items-center justify-around shadow-sm shadow-[#b98416]'>
            <LogoAnimation logoHeight='auto' logoWidth='200px' />
            <nav className='flex items-center justify-between'>
                <Link
                    to='/'
                    className={`text-[#F9DF7B] font-light font-sans text-lg mx-4 px-5 py-2 cursor-pointer  duration-300 ${location.pathname === '/' ? 'shadow-[#b98416] shadow-sm rounded-md font-semibold ' : ''
                        }`}
                >
                    Home
                </Link>
                <Link
                    to='/about'
                    className={`text-[#F9DF7B] font-light font-sans text-lg mx-4 px-5 py-2 cursor-pointer duration-300 ${location.pathname === '/about' ? 'shadow-[#b98416] shadow-sm rounded-md font-semibold' : ''
                        }`}
                >
                    About
                </Link>
                <Link
                    to='/resume'
                    className={`text-[#F9DF7B] font-light font-sans text-lg mx-4 px-5 py-2 cursor-pointer duration-300 ${location.pathname === '/resume' ? 'shadow-[#b98416] shadow-sm rounded-md font-semibold' : ''
                        }`}
                >
                    Resume
                </Link>
                <Link
                    to='/services'
                    className={`text-[#F9DF7B] font-light font-sans text-lg mx-4 px-5 py-2  cursor-pointer duration-300 ${location.pathname === '/services' ? 'shadow-[#b98416] shadow-sm rounded-md font-semibold' : ''
                        }`}
                >
                    Services
                </Link>
            </nav>
            <Link
                to='/contact'
                className={`text-[#f9df7b] font-bold shadow-[#b98416] shadow-sm px-5 py-2 rounded-md duration-300 ${location.pathname === '/contact' ? 'bg-[#b98416] text-black shadow-xl shadow-[#F9DF7B]' : ''
                    }`}
            >
                Contact Me
            </Link>
        </div>
    );
};

export default MenuBar;
