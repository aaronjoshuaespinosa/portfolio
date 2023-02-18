import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import Marquee from "react-fast-marquee";
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { icons, stacks } from '@/constants';
import { NavBar, Project } from '@/components';

export default function Home() {

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
      <Head>
        <title>AJ Espinosa</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="https://ik.imagekit.io/xzgmktvzg/meta_image?ik-sdk-version=javascript-1.4.3&updatedAt=1676191559972" />
        <meta property="og:description" content="A Frontend Web Developer and a Graphic Artist that loves his work. Currently, a 3rd Year Computer Science Student at Cavite State University - Don Severino Delas Alas Campus. Right now focused on learning more about web development using NextJS and Tailwind CSS and on improving my skills and creativity." />
        <meta property="og:url" content="https://ajespinosa.vercel.app/" />
        <meta property="og:title" content="AJ Espinosa" />
        <meta property="og:type" content="website" />
      </Head>

      <div className='bg-dark font-space text-primary relative'>
        <main className='w-full h-screen flex items-center justify-center relative overflow-hidden z-50'>
          {/* NAV BAR */}
          <NavBar />

          {/* LINKS */}
          <div className='hidden md:flex flex-col text-[1.5rem] gap-y-[1.5rem] items-center fixed bottom-0 left-0 pl-[1rem] md:pl-[1.5rem] lg:pl-[3rem] z-50'>
            {icons.map((icon, i) => (
              <Link href={icon.link} target="blank">
                <motion.p key={i} title={icon.title} initial={{ x: "-100%", opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: i * 0.2 + 1 } }} whileHover={{ y: -2, color: "#7B03FC" }} transition={{ duration: 0.2 }} className='cursor-pointer'>{icon.icon}</motion.p>
              </Link>
            ))}
            <motion.div initial={{ x: "-1500%", opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 6 * 0.2 + 1 } }} className='w-[1px] h-[5rem] bg-primary' />
          </div>

          {/* EMAIL */}
          <div className='hidden md:flex flex-col text-[1.5rem] gap-y-[1.5rem] items-center justify-center fixed bottom-0 right-0 pr-[1rem] md:pr-[1.5rem] lg:pr-[3rem] z-50'>
            <Link href="mailto:aaronjoshua.espinosa@yahoo.com" target="blank">
              <motion.p initial={{ x: "100%", opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 2 } }} whileHover={{ y: -3, color: "#7B03FC" }} transition={{ duration: 0.2 }} className='cursor-pointer text-vertical text-[0.875rem] leading-[1rem] tracking-[0.05rem]'>aaronjoshua.espinosa@yahoo.com</motion.p>
            </Link>
            <motion.div initial={{ x: "1500%", opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 + 2 } }} className='w-[1px] h-[5rem] bg-primary' />
          </div>

          <div className='absolute bottom-0 w-[75%] lg:w-[25%] py-[1rem]'>
            <Marquee gradientColor={[9, 3, 17]} gradientWidth={100} speed={50} className="overflow-hidden">
              <div className='text-sm text-secondary/70 whitespace-nowrap'>
                <p className='pr-[4px]'>SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL • SCROLL •</p>
              </div>
            </Marquee>
          </div>

          {/* INFORMATION ABOUT ME */}
          <section className='flex flex-row justify-center items-center w-full px-[2rem] md:px-[4.5rem] lg:px-[7rem] lg:max-w-[100rem] z-10'>

            <div className='w-full md:w-[50%] flex flex-col md:items-start gap-y-[1.5rem]'>
              {/* TITLE */}
              <motion.p initial={{ x: "-100%", opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }} className='text-accent text-[0.9rem] lg:text-[1rem]'>Hello, my name is</motion.p>

              {/* NAME */}
              <div className='flex flex-col'>
                <motion.h1 initial={{ x: "-100%", opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }} className='text-primary font-bold text-[2.5rem] md:text-[3rem] lg:text-[4rem] leading-[2.5rem] md:leading-[3rem] lg:leading-[4rem]'>AJ Espinosa.</motion.h1>
                <motion.h1 initial={{ x: "-100%", opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 2 * 0.2 } }} className='text-secondary font-bold text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[2.5rem] md:leading-[3rem] lg:leading-[4rem] flex gap-x-[0.5rem] lg:gap-x-[1rem] whitespace-nowrap'>I am <span><Typewriter options={{ strings: ['a Developer.', 'an Artist.', 'a Designer.'], autoStart: true, loop: true, }} /></span></motion.h1>
              </div>

              {/* DESCRIPTION */}
              <motion.p initial={{ x: "-100%", opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 3 * 0.2 } }} className='text-secondary text-[0.9rem] lg:text-[1rem] mb-[2rem]'>A Frontend Web Developer and a Graphic Artist that loves his work. Currently, a 3rd Year Computer Science Student at Cavite State University - Don Severino Delas Alas Campus. Right now focused on learning more about web development using <Link href="https://nextjs.org/" target="blank"><span className='text-accent font-bold hover:underline'>NextJS</span></Link> and <Link href="https://tailwindcss.com/" target="blank"><span className='text-accent font-bold hover:underline'>Tailwind CSS</span></Link> and on improving my skills and creativity.</motion.p>

              {/* BUTTON */}
              <Link href="mailto:aaronjoshua.espinosa@yahoo.com" className='w-fit'><motion.p initial={{ x: "-100%", opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 4 * 0.2 } }} className='text-accent border-[1px] border-accent rounded-[4px] text-[0.9rem] lg:text-[1rem] text-center md:text-left py-[1rem] px-[2rem] hover:bg-accent/10'>Contact Me!</motion.p></Link>
            </div>

            {/* IMAGE */}
            <motion.div initial={{ x: "50%", opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 1 } }} className='hidden md:flex w-[50%] relative items-center justify-center'>
              <div className='bg-gradient bg-gradient-to-t from-dark to-transparent h-[10rem] w-full absolute bottom-0' />
              <img src="https://ik.imagekit.io/xzgmktvzg/aj_portfolio_image.png?ik-sdk-version=javascript-1.4.3&updatedAt=1676135167839" />
            </motion.div>

          </section>
        </main>

        {/* ABOUT SECTION */}
        <section id='about' className='w-full h-auto flex items-center justify-center relative overflow-hidden py-[10rem]'>
          <div className='h-full flex flex-col gap-y-[1rem] justify-center items-center w-full px-[2rem] md:px-[4.5rem] lg:px-[7rem] lg:max-w-[100rem]'>

            {/* SECTION TITLE */}
            <div className='flex gap-x-[1.5rem] w-full items-center'>
              <h1 className='font-bold text-2xl lg:4xl whitespace-nowrap'>• About Me</h1>
              <hr className='border-[1px] border-accent/50 w-full lg:w-[25rem]' />
            </div>

            {/* SECTION DETAILS */}
            <div className='flex flex-col lg:flex-row items-center gap-x-[4rem] gap-y-[3rem] h-full'>
              <div className='flex flex-col gap-y-[1.5rem]'>
                <p className='text-secondary text-[0.9rem] lg:text-[1rem] text-justify w-auto'>I am a Frontend Web Developer and a Graphics Artist that loves his work. Currently, I am a 3rd Year Computer Science Student at Cavite State University - Don Severino Delas Alas Campus. Right now I am focused on learning more about web development using NextJS and Tailwind CSS and on improving my skills and creativity.</p>

                <div className='flex flex-col lg:flex-row gap-y-[1rem] gap-x-[10rem]'>
                  {stacks.map((stack, i) => (
                    <div key={i} className='flex flex-col gap-y-[1rem]'>
                      <h1 className='font-bold text-accent text-2xl'>{stack.title}</h1>
                      <div className='flex gap-x-[12px] text-[2rem]'>
                        {stack.icons.map((icon, i) => (
                          <motion.p key={i} title={icon.title} className="cursor-crosshair" whileHover={{ y: -3, color: `${icon.hoverColor}` }} transition={{ duration: 0.2 }}>{icon.ico}</motion.p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <hr className='lg:hidden border-l-[1px] border-secondary w-full' />
              <div className='hidden lg:block h-[13rem] border-l-[1px] border-secondary' />

              <div className='flex flex-row lg:flex-col justify-between items-center gap-y-[1rem] w-full lg:w-auto'>
                <div className='flex flex-col items-center'>
                  <p className='font-bold text-accent text-6xl'>4+</p>
                  <p className='font-bold text-accent text-lg leading-[1.125rem]'>years</p>
                  <p className='whitespace-nowrap text-secondary text-sm lg:text-base pt-[0.5rem]'>Graphic & Web Design</p>
                </div>

                <div className='flex flex-col items-center'>
                  <p className='font-bold text-accent text-6xl leading-[4rem]'>3+</p>
                  <p className='font-bold text-accent text-lg leading-[1.125rem]'>years</p>
                  <p className='whitespace-nowrap text-secondary text-sm lg:text-base pt-[0.5rem]'>Web Development</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id='projects' className='w-full h-auto flex items-center justify-center relative overflow-hidden py-[10rem]'>
          <div className='h-full flex flex-col gap-y-[1.5rem] justify-center items-center w-full px-[2rem] md:px-[4.5rem] lg:px-[7rem] lg:max-w-[100rem]'>

            {/* SECTION TITLE */}
            <div className='flex gap-x-[1.5rem] w-full items-center'>
              <h1 className='font-bold text-2xl lg:4xl whitespace-nowrap'>• Projects</h1>
              <hr className='border-[1px] border-accent/50 w-full lg:w-[25rem]' />
            </div>

            {/* SECTION DETAILS */}
            <div className='flex flex-col items-center gap-y-[1.5rem] w-full'>
              <Project />
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id='contact' className='w-full h-auto flex items-center justify-center relative overflow-hidden py-[5rem]'>
          <div className='h-full flex flex-col gap-y-[5rem] justify-center items-center w-full px-[2rem] md:px-[4.5rem] lg:px-[7rem] lg:max-w-[100rem]'>
            <Marquee gradientColor={[9, 3, 17]} gradientWidth={100} speed={100} className="overflow-hidden">
              <div className='font-bold text-4xl md:text-6xl lg:text-8xl text-dark flex gap-x-[1rem] md:gap-x-[2rem] lg:gap-x-[4rem] whitespace-nowrap'>
                <p className='drop-shadow-[0_0_1px_#F1F5F9]'>GET IN TOUCH</p>
                <p className='text-accent'>•</p>
                <p className='text-primary'>GET IN TOUCH</p>
                <p className='text-accent'>•</p>
                <p className='text-accent'></p>
              </div>
            </Marquee>
            <div className='flex flex-col items-center gap-y-[1rem] md:gap-y-[2.5rem]'>
              <p className='text-sm md:text-lg lg:text-xl text-secondary'>Let's work together!</p>
              <p className='font-bold text-lg md:text-3xl lg:text-5xl'>aaronjoshua.espinosa@yahoo.com</p>

              {/* LINKS */}
              <div className='flex text-[1.5rem] gap-x-[1.5rem] items-center'>
                {icons.map((icon, i) => (
                  <Link href={icon.link} target="blank">
                    <motion.p key={i} title={icon.title} whileHover={{ y: -2, color: "#7B03FC" }} className='cursor-pointer'>{icon.icon}</motion.p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER SECTION */}
        <footer className='w-full h-auto flex items-center justify-center bg-dark text-primary text-[0.9rem] lg:text-[1rem] font-space relative'>
          <div className='h-full flex w-full px-[2rem] md:px-[4.5rem] lg:px-[7rem] lg:max-w-[100rem]'>
            <div className='border-t-[1px] border-t-primary flex flex-row justify-between items-center w-full py-[1.5rem]'>
              <p>© 2023 AJ Espinosa</p>
              <p className='cursor-pointer' onClick={scrollTop}>Go to top ↑</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
