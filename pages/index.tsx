import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion';
import { TbBrandGithub, TbBrandBehance, TbBrandDribbble, TbBrandLinkedin, TbBrandInstagram, TbBrandFacebook } from "react-icons/tb";

export default function Home() {

  const links = [
    {
      link: "#about",
      text: "About",
    },
    {
      link: "#",
      text: "Projects",
    },
    {
      link: "#",
      text: "Contact",
    },
  ]

  const icons = [
    {
      link: "https://github.com/eyrooonnn",
      icon: <TbBrandGithub />,
    },
    {
      link: "https://www.behance.net/aaronjoshuaespinosa",
      icon: <TbBrandBehance />,
    },
    {
      link: "https://dribbble.com/aaronjoshuaespinosa",
      icon: <TbBrandDribbble />,
    },
    {
      link: "https://www.linkedin.com/in/aaronjoshuaespinosa/",
      icon: <TbBrandLinkedin />,
    },
    {
      link: "https://www.instagram.com/_eyrooonnn/",
      icon: <TbBrandInstagram />,
    },
    {
      link: "https://www.facebook.com/eyrooonnn/",
      icon: <TbBrandFacebook />,
    },
  ]

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

      <main className='w-full h-screen flex items-center justify-center bg-dark text-light font-space relative overflow-hidden'>
        {/* NAV BAR */}
        <nav className='fixed bg-dark/90 backdrop-blur-sm top-0 flex flex-row justify-between items-center w-full py-[1.5rem] px-[3.5rem] md:px-[4.5rem] lg:px-[7rem] lg:max-w-[100rem] z-50'>
          <motion.img initial={{ rotate: -540, scale: 0, opacity: 0 }} animate={{ rotate: 0, scale: 1, opacity: 1, transition: { duration: 1 } }} className='h-[1.5rem]' src="https://ik.imagekit.io/xzgmktvzg/ajlogo?ik-sdk-version=javascript-1.4.3&updatedAt=1676132015789" />

          {/* NAV LINKS */}
          <div className='flex flex-row gap-x-[4rem] text-primary text-[0.875rem]'>
            {links.map((link, i) => (
              <Link href={link.link}><p className='hover:text-accent'>{link.text}</p></Link>
            ))}
          </div>
        </nav>

        {/* LINKS */}
        <div className='flex flex-col text-[1.5rem] text-primary gap-y-[1.5rem] items-center fixed bottom-0 left-0 pl-[1rem] md:pl-[1.5rem] lg:pl-[3rem] z-40'>
          {icons.map((icon, i) => (
            <Link href={icon.link} target="blank">
              <motion.p initial={{ x: "-100%", opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: i * 0.2 + 1 } }} whileHover={{ y: -3, color: "#7B03FC" }} transition={{ duration: 0.2 }} className='cursor-pointer'>{icon.icon}</motion.p>
            </Link>
          ))}
          <motion.div initial={{ x: "-1500%", opacity: 0 }} animate={{ x: 0, opacity: 1, transition: { duration: 0.5, delay: 6 * 0.2 + 1 } }} className='w-[1px] h-[5rem] bg-primary' />
        </div>

        <div className='flex flex-col text-[1.5rem] text-primary gap-y-[1.5rem] items-center justify-center fixed bottom-0 right-0 pr-[1rem] md:pr-[1.5rem] lg:pr-[3rem] z-40'>
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
      <section className='w-full h-screen flex items-center justify-center bg-dark text-light font-space relative overflow-hidden'>
        <div>
        </div>
      </section>
    </>
  )
}
