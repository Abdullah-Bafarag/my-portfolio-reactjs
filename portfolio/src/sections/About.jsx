import React from 'react'
import ImageMe from '../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { Button } from '../components/Button';
import { SectionHeader } from '../components/SectionHeader';
import { AboutCardContent } from '../components/AboutCardContent';

const About = () => {
  return (
    <section id='about'>
      {/* about top section */}
      <SectionHeader
        subtitle="Get To Know"
        title="About Me"
      />
      {/* about container */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 sm:px-8 md:px-16'>
        {/* about image */}
        <div className='justify-self-center w-full max-w-xs sm:max-w-sm rounded-2xl rotate-0 transition-transform duration-300 bg-gradient-to-br from-[var(--color-primary)] via-transparent to-[var(--color-primary)]'>
          <img src={ImageMe} alt="" srcset="" className='mx-auto w-full max-w-xs sm:max-w-sm rotate-0 sm:rotate-10 rounded-2xl transition-transform duration-300 hover:rotate-0' />
        </div>
        {/* about content */}
        <div>
          {/* about content cards */}
          <div className='grid grid-cols-3 gap-1.5'>
            <AboutCardContent
              icon={FaAward}
              title="Focus"
              subtitle="Modern Tech & UI"
            />

            <AboutCardContent
              icon={FiUsers}
              title="Commitment"
              subtitle="Clean & Scalable Code"
            />

            <AboutCardContent
              icon={VscFolderLibrary}
              title="Projects"
              subtitle="Hands-on & Built"
            />
            
          </div>
          <p className="my-4 sm:my-8 mx-auto sm:mx-0 block text-sm sm:text-base text-[var(--color-light)] leading-relaxed max-w-xl">
            Passionate Web & Mobile Software Engineer focused on building clean, responsive, and user-friendly applications.
            Driven by modern development standards, continuous learning, and crafting scalable digital solutions.
          </p>
          <a href="#contact">
            <Button className='block mx-auto lg:mx-0'>
              Let's talk
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About