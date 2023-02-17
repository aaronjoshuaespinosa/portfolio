import Link from 'next/link'
import { motion } from 'framer-motion';
import { links } from '@/constants';

const NavBar = () => {
    return (
        <>
            <nav className='fixed bg-dark/90 backdrop-blur-sm top-0 flex flex-row justify-between items-center w-full py-[1.5rem] px-[3.5rem] md:px-[4.5rem] lg:px-[7rem] lg:max-w-[100rem] z-50'>
                <motion.img initial={{ rotate: -540, scale: 0, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1, transition: { duration: 1 } }} className='h-[1.5rem]' src="https://ik.imagekit.io/xzgmktvzg/ajlogo?ik-sdk-version=javascript-1.4.3&updatedAt=1676132015789" />

                {/* NAV LINKS */}
                <div className='flex flex-row gap-x-[4rem] text-primary text-[0.875rem]'>
                    {links.map((link, i) => (
                        <Link href={link.link}><p className='hover:text-accent'>{link.text}</p></Link>
                    ))}
                </div>
            </nav>
        </>
    );
}

export default NavBar;