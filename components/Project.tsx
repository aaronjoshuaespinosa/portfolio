import Link from 'next/link'
import { projects } from '@/constants';
import { TbBrandGithub } from "react-icons/tb";
import { HiArrowUpRight } from "react-icons/hi2";

const Project = () => {
    return (
        <>
            {/* INDIVIDUAL PROJECTS */}
            {projects.map((project, i) => (
                <div key={i} className='flex flex-col gap-y-[0.75rem] p-[2rem] bg-secondary/10 rounded-[7px] w-full'>
                    <p>{project.label}</p>
                    <div className='flex flex-row gap-x-[1.5rem] w-full relative'>

                        {/* PROJECT DETAILS */}
                        <div className='flex flex-col gap-y-[0.75rem]'>
                            <div className='flex flex-row justify-between items-center'>
                                <h1 className='text-4xl text-accent font-bold'>{project.title}</h1>
                                <div className='flex flex-col items-end'>
                                    <p className='text-secondary'>Year</p>
                                    <p className='text-primary text-xl font-bold'>{project.year}</p>
                                </div>
                            </div>
                            {/* PROJECT IMAGE */}
                            <div className='bg-primary w-full h-[12rem] rounded-[7px] flex md:hidden'>
                                <img src={project.img} alt="project" />
                            </div>
                            <p className='text-justify text-[0.9rem] lg:text-[1rem] text-secondary md:max-w-[50rem] lg:max-w-[160rem]'>{project.desc}</p>
                        </div>

                        {/* PROJECT IMAGE */}
                        <div className='bg-primary h-[12rem] rounded-[7px] hidden md:flex justify-center items-center w-full overflow-hidden'>
                            <img src={project.img} alt="project" className='w-fit grayscale hover:grayscale-0 transition-all ease-in-out duration-[0.2s]' />
                        </div>
                    </div>

                    <div className='w-full flex flex-col md:flex-row justify-between items-start gap-y-[1rem] gap-x-[1rem]'>
                        {/* PROJECT CATEGORIES */}
                        <div className='flex gap-x-[0.375rem] gap-y-[0.375rem] flex-wrap'>
                            {project.tags.map((tag, i) => (
                                <p className='py-[0.375rem] px-[0.75rem] bg-primary text-[0.9rem] lg:text-[1rem] text-dark w-fit whitespace-nowrap font-bold rounded-full basis-1'>{tag}</p>
                            ))}
                        </div>

                        {/* PROJECT LINKS */}
                        <div className='flex justify-between md:justify-center items-center gap-x-[12px] w-full md:w-auto'>
                            <Link href={project.srcLink} target="_blank" style={`${project.srcLink}` === "#" ? { pointerEvents: "none", opacity: 0.3 } : {}}>
                                <p className='flex gap-x-[6px] text-[0.9rem] lg:text-[1rem] justify-center items-center border-primary border-[1px] rounded-[5px] py-[0.375rem] px-[0.75rem] hover:bg-primary hover:text-dark cursor-pointer whitespace-nowrap'>Source Code <TbBrandGithub /></p>
                            </Link>

                            <Link href={project.liveLink} target="_blank" style={`${project.liveLink}` === "#" ? { pointerEvents: "none", opacity: 0.3 } : {}}>
                                <p className='flex gap-x-[6px] text-[0.9rem] lg:text-[1rem] justify-center items-center bg-accent rounded-[5px] py-[0.375rem] px-[0.75rem] hover:bg-accent/50 cursor-pointer whitespace-nowrap'>Live View <HiArrowUpRight /></p>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Project;