import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion';
import { icons, stacks } from '@/constants';
import { NavBar } from '@/components';
import { TbBrandGithub } from "react-icons/tb";
import { HiArrowUpRight } from "react-icons/hi2";

export default function Home() {

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

      <main className='w-full h-screen flex items-center justify-center bg-dark text-primary font-space relative overflow-hidden'>
        {/* NAV BAR */}
        <NavBar />

        {/* LINKS */}
        <div className='flex flex-col text-[1.5rem] gap-y-[1.5rem] items-center fixed bottom-0 left-0 pl-[1rem] md:pl-[1.5rem] lg:pl-[3rem] z-50'>
          {icons.map((icon, i) => (
            <Link href={icon.link} target="blank">
              <motion.p key={i} title={icon.title} initial={{ x: "-100%", opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: i * 0.2 + 1 } }} whileHover={{ y: -3, color: "#7B03FC" }} transition={{ duration: 0.2 }} className='cursor-pointer'>{icon.icon}</motion.p>
            </Link>
          ))}
          <motion.div initial={{ x: "-1500%", opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 6 * 0.2 + 1 } }} className='w-[1px] h-[5rem] bg-primary' />
        </div>

        <div className='flex flex-col text-[1.5rem] text-primary gap-y-[1.5rem] items-center justify-center fixed bottom-0 right-0 pr-[1rem] md:pr-[1.5rem] lg:pr-[3rem] z-50'>
          {/* EMAIL */}
          <Link href="mailto:aaronjoshua.espinosa@yahoo.com" target="blank">
            <motion.p initial={{ x: "100%", opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 2 } }} whileHover={{ y: -3, color: "#7B03FC" }} transition={{ duration: 0.2 }} className='cursor-pointer text-vertical text-[0.875rem] leading-[1rem] tracking-[0.05rem]'>aaronjoshua.espinosa@yahoo.com</motion.p>
          </Link>
          <motion.div initial={{ x: "1500%", opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 + 2 } }} className='w-[1px] h-[5rem] bg-primary' />
        </div>

        {/* INFORMATION ABOUT ME */}
        <section className='flex flex-row justify-center items-center w-full px-[3.5rem] md:px-[4.5rem] lg:px-[7rem] lg:max-w-[100rem]'>

          <div className='w-full md:w-[50%] flex flex-col items-center md:items-start gap-y-[1.5rem] text-center md:text-left'>
            {/* TITLE */}
            <motion.p initial={{ x: "-100%", opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }} className='text-accent text-[0.9rem] lg:text-[1rem]'>Hello, my name is</motion.p>

            {/* NAME */}
            <div className='flex flex-col'>
              <motion.h1 initial={{ x: "-100%", opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }} className='text-primary font-bold text-[2.5rem] md:text-[3rem] lg:text-[4rem] leading-[2.5rem] md:leading-[3rem] lg:leading-[4rem]'>AJ Espinosa.</motion.h1>
              <motion.h1 initial={{ x: "-100%", opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 2 * 0.2 } }} className='text-secondary font-bold text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[2.5rem] md:leading-[3rem] lg:leading-[4rem]'>I am <span>a Developer.</span></motion.h1>
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
      <section id='about' className='w-full h-auto flex items-center justify-center bg-dark text-primary font-space relative overflow-hidden py-[10rem]'>
        <div className='h-full flex flex-col gap-y-[1rem] justify-center items-center w-full px-[3.5rem] md:px-[4.5rem] lg:px-[7rem] lg:max-w-[100rem]'>

          {/* SECTION TITLE */}
          <div className='flex gap-x-[1.5rem] w-full items-center'>
            <h1 className='font-bold text-4xl'>• About Me</h1>
            <hr className='border-[1px] border-accent/50 w-[25rem]' />
          </div>

          {/* SECTION DETAILS */}
          <div className='flex items-center gap-x-[4rem] h-full'>
            <div className='flex flex-col gap-y-[1.5rem]'>
              <p className='text-secondary text-justify'>I am a Frontend Web Developer and a Graphics Artist that loves his work. Currently, I am a 3rd Year Computer Science Student at Cavite State University - Don Severino Delas Alas Campus. Right now I am focused on learning more about web development using NextJS and Tailwind CSS and on improving my skills and creativity.</p>
              <div className='flex gap-x-[10rem]'>

                {stacks.map((stack, i) => (
                  <div key={i} className='flex flex-col gap-y-[1rem]'>
                    <h1 className='font-bold text-accent text-2xl'>{stack.title}</h1>
                    <div className='flex gap-x-[12px] text-[2rem]'>
                      {stack.icons.map((icon, i) => (
                        <motion.p key={i} title={icon.title} whileHover={{ y: -3, color: `${icon.hoverColor}` }} transition={{ duration: 0.2 }}>{icon.ico}</motion.p>
                      ))}
                    </div>
                  </div>
                ))}

              </div>
            </div>

            <div className='h-[13rem] border-l-[1px] border-secondary' />

            <div className='flex flex-col gap-y-[1rem]'>
              <div className='flex flex-col items-center'>
                <p className='font-bold text-accent text-6xl'>4+</p>
                <p className='font-bold text-accent text-lg leading-[1.125rem]'>years</p>
                <p className='whitespace-nowrap text-secondary pt-[0.5rem]'>Graphic & Web Design</p>
              </div>

              <div className='flex flex-col items-center'>
                <p className='font-bold text-accent text-6xl leading-[4rem]'>3+</p>
                <p className='font-bold text-accent text-lg leading-[1.125rem]'>years</p>
                <p className='whitespace-nowrap text-secondary pt-[0.5rem]'>Web Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id='projects' className='w-full h-auto flex items-center justify-center bg-dark text-primary font-space relative overflow-hidden py-[10rem]'>
        <div className='h-full flex flex-col gap-y-[1.5rem] justify-center items-center w-full px-[3.5rem] md:px-[4.5rem] lg:px-[7rem] lg:max-w-[100rem]'>

          {/* SECTION TITLE */}
          <div className='flex gap-x-[1.5rem] w-full items-center'>
            <h1 className='font-bold text-4xl'>• Projects</h1>
            <hr className='border-[1px] border-accent/50 w-[25rem]' />
          </div>

          {/* SECTION DETAILS */}
          <div className='flex flex-col items-center gap-y-[1.5rem] w-full'>
            {/* WINGMAN */}
            <div className='flex flex-col gap-y-[0.75rem] p-[2rem] bg-secondary/10 rounded-[7px] w-full'>
              <p>LATEST PROJECT</p>
              <div className='flex flex-row gap-x-[1.5rem]'>

                {/* PROJECT DETAILS */}
                <div className='flex flex-col gap-y-[0.75rem]'>
                  <div className='flex flex-row justify-between items-center'>
                    <h1 className='text-4xl text-accent font-bold'>WingMan</h1>
                    <div className='flex flex-col items-end'>
                      <p className='text-secondary'>Year</p>
                      <p className='text-primary text-xl font-bold'>2023</p>
                    </div>
                  </div>
                  <p className='text-justify text-secondary'>An Online Assistant Platform for CEIT Students at Cavite State University - Don Severino Delas Alas Campus. This is a baby thesis project for one of our subjects. This website is done in collaboration with one of my groupmates. I did most of the frontend side of the website, and some adjustments in the backend.</p>
                </div>

                {/* PROJECT IMAGE */}
                <div className='bg-primary w-[25rem] h-[12rem] rounded-[7px] flex shrink-0'>
                  <img src="" alt="" />
                </div>
              </div>

              <div className='w-full flex justify-between'>
                {/* PROJECT CATEGORIES */}
                <div className='flex gap-x-[0.375rem]'>
                  <p className='py-[0.375rem] px-[0.75rem] bg-primary text-dark w-fit font-bold rounded-full'>ReactJS</p>
                  <p className='py-[0.375rem] px-[0.75rem] bg-primary text-dark w-fit font-bold rounded-full'>MongoDB</p>
                  <p className='py-[0.375rem] px-[0.75rem] bg-primary text-dark w-fit font-bold rounded-full'>ExpressJS</p>
                  <p className='py-[0.375rem] px-[0.75rem] bg-primary text-dark w-fit font-bold rounded-full'>NodeJS</p>
                  <p className='py-[0.375rem] px-[0.75rem] bg-primary text-dark w-fit font-bold rounded-full'>Tailwind CSS</p>
                </div>

                <div className='flex justify-center items-center gap-x-[12px]'>
                  <p className='flex gap-x-[6px] justify-center items-center border-primary border-[1px] rounded-[5px] py-[0.375rem] px-[0.75rem] hover:bg-primary hover:text-dark cursor-pointer'>Source Code <TbBrandGithub /></p>
                  <p className='flex gap-x-[6px] justify-center items-center bg-accent rounded-[5px] py-[0.375rem] px-[0.75rem] hover:bg-accent/50 cursor-pointer'>Live View <HiArrowUpRight /></p>
                </div>
              </div>
            </div>

            {/* PROJECT C */}
            <div className='flex flex-col gap-y-[0.75rem] p-[2rem] bg-secondary/10 rounded-[7px]'>
              <p>ONGOING PROJECT</p>
              <div className='flex flex-row gap-x-[1.5rem]'>

                {/* PROJECT DETAILS */}
                <div className='flex flex-col gap-y-[0.75rem]'>
                  <div className='flex flex-row justify-between items-center'>
                    <h1 className='text-4xl text-accent font-bold'>Project C</h1>
                    <div className='flex flex-col items-end'>
                      <p className='text-secondary'>Year</p>
                      <p className='text-primary text-xl font-bold'>2023</p>
                    </div>
                  </div>
                  <p className='text-justify text-secondary'>A social media type website where you create a deck and fill it with cards. Decks are like albums that you can name and categorize anything. Cards are like posts that can contain images or texts that the user wants to post. In this project I want to practice my frontend skills and to learn more about backend development.</p>
                </div>

                {/* PROJECT IMAGE */}
                <div className='bg-primary w-[25rem] h-[12rem] rounded-[7px] flex shrink-0'>
                  <img src="" alt="" />
                </div>
              </div>

              <div className='w-full flex justify-between'>
                {/* PROJECT CATEGORIES */}
                <div className='flex gap-x-[0.375rem]'>
                  <p className='py-[0.375rem] px-[0.75rem] bg-primary text-dark w-fit font-bold rounded-full'>NextJS</p>
                  <p className='py-[0.375rem] px-[0.75rem] bg-primary text-dark w-fit font-bold rounded-full'>MongoDB</p>
                  <p className='py-[0.375rem] px-[0.75rem] bg-primary text-dark w-fit font-bold rounded-full'>ExpressJS</p>
                  <p className='py-[0.375rem] px-[0.75rem] bg-primary text-dark w-fit font-bold rounded-full'>NodeJS</p>
                  <p className='py-[0.375rem] px-[0.75rem] bg-primary text-dark w-fit font-bold rounded-full'>Tailwind CSS</p>
                </div>

                <div className='flex justify-center items-center gap-x-[12px]'>
                  <p className='flex gap-x-[6px] justify-center items-center border-primary border-[1px] rounded-[5px] py-[0.375rem] px-[0.75rem]'>Source Code <TbBrandGithub /></p>
                  {/* <p className='flex gap-x-[6px] justify-center items-center bg-accent rounded-[5px] py-[0.375rem] px-[0.75rem]'>Live View <HiArrowUpRight /></p> */}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
