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
                    <div className='flex flex-row gap-x-[1.5rem]'>

                        {/* PROJECT DETAILS */}
                        <div className='flex flex-col gap-y-[0.75rem]'>
                            <div className='flex flex-row justify-between items-center'>
                                <h1 className='text-4xl text-accent font-bold'>{project.title}</h1>
                                <div className='flex flex-col items-end'>
                                    <p className='text-secondary'>Year</p>
                                    <p className='text-primary text-xl font-bold'>{project.year}</p>
                                </div>
                            </div>
                            <p className='text-justify text-secondary'>{project.desc}</p>
                        </div>

                        {/* PROJECT IMAGE */}
                        <div className='bg-primary w-[25rem] h-[12rem] rounded-[7px] flex shrink-0'>
                            <img src="" alt="" />
                        </div>
                    </div>

                    <div className='w-full flex justify-between'>
                        {/* PROJECT CATEGORIES */}
                        <div className='flex gap-x-[0.375rem]'>
                            {project.tags.map((tag, i) => (
                                <p className='py-[0.375rem] px-[0.75rem] bg-primary text-dark w-fit font-bold rounded-full'>{tag}</p>
                            ))}
                        </div>

                        {/* PROJECT LINKS */}
                        <div className='flex justify-center items-center gap-x-[12px]'>
                            <Link href={project.srcLink} target="_blank" style={`${project.srcLink}` === "#" ? { pointerEvents: "none", opacity: 0.3 } : {}}>
                                <p className='flex gap-x-[6px] justify-center items-center border-primary border-[1px] rounded-[5px] py-[0.375rem] px-[0.75rem] hover:bg-primary hover:text-dark cursor-pointer'>Source Code <TbBrandGithub /></p>
                            </Link>

                            <Link href={project.liveLink} target="_blank" style={`${project.liveLink}` === "#" ? { pointerEvents: "none", opacity: 0.3 } : {}}>
                                <p className='flex gap-x-[6px] justify-center items-center bg-accent rounded-[5px] py-[0.375rem] px-[0.75rem] hover:bg-accent/50 cursor-pointer'>Live View <HiArrowUpRight /></p>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default Project;