import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion';
import { TbBrandGithub, TbBrandBehance, TbBrandLinkedin, TbBrandInstagram, TbBrandFacebook } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <Head>
        <title>AJ Espinosa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='w-full h-screen flex items-center justify-center bg-dark text-light font-space relative'>
        <nav className='fixed top-0 flex flex-row justify-between items-center w-full p-[1rem] md:p-[1.5rem] lg:p-[3rem]'>
          <img className='h-[1.5rem]' src="https://ik.imagekit.io/xzgmktvzg/ajlogo?ik-sdk-version=javascript-1.4.3&updatedAt=1676132015789" />
          <div className='flex-row gap-x-[0.75rem] text-accent text-[0.875] font-bold hover:text-accent hidden'>
            <Link href="#"><p>nav.<span className='text-primary'>Me</span></p></Link>
            <Link href="#"><p>nav.<span className='text-primary'>Projects</span></p></Link>
            <Link href="#"><p>nav.<span className='text-primary'>Contact</span></p></Link>
          </div>
        </nav>

        <div className='flex flex-col text-[1.5rem] text-primary gap-y-[1.5rem] items-center absolute bottom-0 left-0 pl-[1rem] md:pl-[1.5rem] lg:pl-[3rem]'>
          <Link href="https://github.com/eyrooonnn" target="blank">
            <motion.p whileHover={{ y: -3, color: "#7B03FC" }} transition={{ duration: 0.2 }} className='cursor-pointer'><TbBrandGithub /></motion.p>
          </Link>

          <Link href="https://www.behance.net/aaronjoshuaespinosa" target="blank">
            <motion.p whileHover={{ y: -3, color: "#7B03FC" }} transition={{ duration: 0.2 }} className='cursor-pointer'><TbBrandBehance /></motion.p>
          </Link>

          <Link href="https://www.linkedin.com/in/aaronjoshuaespinosa/" target="blank">
            <motion.p whileHover={{ y: -3, color: "#7B03FC" }} transition={{ duration: 0.2 }} className='cursor-pointer'><TbBrandLinkedin /></motion.p>
          </Link>

          <Link href="https://www.instagram.com/_eyrooonnn/" target="blank">
            <motion.p whileHover={{ y: -3, color: "#7B03FC" }} transition={{ duration: 0.2 }} className='cursor-pointer'><TbBrandInstagram /></motion.p>
          </Link>

          <Link href="https://www.facebook.com/eyrooonnn/" target="blank">
            <motion.p whileHover={{ y: -3, color: "#7B03FC" }} transition={{ duration: 0.2 }} className='cursor-pointer'><TbBrandFacebook /></motion.p>
          </Link>
          <div className='w-[1px] h-[5rem] bg-primary' />
        </div>

        <section className='flex flex-row justify-center items-center w-full px-[3.5rem] md:px-[4.5rem] lg:px-[7rem] lg:max-w-[100rem]'>
          <div className='w-full md:w-[50%] flex flex-col gap-y-[1.5rem]'>
            <p className='text-accent text-[0.9rem] lg:text-[1rem]'>Hello, I am</p>
            <div className='flex flex-col'>
              <h1 className='text-primary font-bold text-[2.5rem] md:text-[3rem] lg:text-[4rem] leading-[2.5rem] md:leading-[3rem] lg:leading-[4rem]'>AJ Espinosa.</h1>
              <h1 className='text-secondary font-bold text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[2.5rem] md:leading-[3rem] lg:leading-[4rem]'>I am <span>a Developer.</span></h1>
            </div>
            <p className='text-secondary text-[0.9rem] lg:text-[1rem]'>I am a Frontend Web Developer and a Graphic Artist that loves his work. Currently, I am a 3rd Year Computer Science Student at Cavite State University - Don Severino Delas Alas Campus. Right now I am focused on learning more about web development using <Link href="https://nextjs.org/" target="blank"><span className='text-accent hover:underline'>NextJS</span></Link> and <Link href="https://tailwindcss.com/" target="blank"><span className='text-accent hover:underline'>Tailwind CSS</span></Link> and on improving my skills and creativity.</p>
            <Link href="mailto:aaronjoshua.espinosa@yahoo.com"><button className='w-fit text-accent border-[1px] border-accent rounded-[4px] text-[0.9rem] lg:text-[1rem] py-[1rem] px-[2rem] mt-[2rem] hover:bg-accent/10 transition-all ease-in-out duration-[0.2]'>Contact Me!</button></Link>
          </div>

          <div className='hidden md:flex w-[50%] relative items-center justify-center'>
            <div className='bg-gradient bg-gradient-to-t from-dark to-transparent h-[10rem] w-full absolute bottom-0' />
            <img src="https://ik.imagekit.io/xzgmktvzg/aj_portfolio_image.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676135167839" />
          </div>
        </section>
      </main>
    </>
  )
}
