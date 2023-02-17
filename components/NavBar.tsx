import Link from 'next/link'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { links } from '@/constants';

const NavBar = () => {

    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) {
                setShow(false);
            } else {
                setShow(true);
            }

            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <>
            <div className='fixed bg-dark/90 backdrop-blur-sm top-0 flex w-full z-50 items-center justify-center transition-all ease-in-out duration-[0.5s]' style={show || window.scrollY === 0 ? { transform: "translateY(0%)", boxShadow: "0px 10px 30px #090311" } : { transform: "translateY(-100%)", boxShadow: "0px 0px 20px #7B03FC" }}>
                <nav className='flex flex-row justify-between items-center w-full py-[1.5rem] px-[3.5rem] md:px-[4.5rem] lg:px-[7rem] lg:max-w-[100rem] z-50'>
                    <motion.img initial={{ rotate: -540, scale: 0, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1, transition: { duration: 1 } }} className='h-[1.5rem]' src="https://ik.imagekit.io/xzgmktvzg/ajlogo?ik-sdk-version=javascript-1.4.3&updatedAt=1676132015789" />

                    {/* NAV LINKS */}
                    <div className='flex flex-row gap-x-[4rem] text-primary text-[0.875rem]'>
                        {links.map((link, i) => (
                            <Link href={link.link} scroll={true}><p className='hover:text-accent'>{link.text}</p></Link>
                        ))}
                    </div>
                </nav>
            </div>
        </>
    );
}

export default NavBar;