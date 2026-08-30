import React from 'react'
import { Button } from '../components/Button'
import Me from '../assets/me.png'
import CV from '../assets/Abdullah_Bafarag_CV.pdf'
import HomeSocials from '../components/HomeSocials'

const Home = () => {
  return (
    <section className="flex flex-col gap-2 justify-center items-center">
      <h4>Hellow I'm</h4>
      <h1 className='text-3xl md:text-5xl'>Abdullah Bafarag</h1>
      <h4 className='text-gray-400'>Web & Mobile Software Engineer</h4>
      <div className='flex gap-4'>
        <a href={CV} download>
          <Button variant="outline" className="w-40">
            Download CV
          </Button>
        </a>
        <a href="#contact">
        <Button>
          Let's talk
          </Button>
        </a>
      </div>
      <div className="w-65 h-85 md:w-72 md:h-95 rounded-t-full bg-gradient-to-b from-[var(--color-primary)] to-transparent p-2.5 pt-17 mt-10 overflow-hidden">
        <img
          src={Me}
          alt="Profile"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="relative w-11/12 min-h-[100px] hidden md:block">

        <a
          href="#about"
          className="absolute bottom-25 right-0 rotate-90 origin-right text-xs sm:text-sm tracking-widest text-[var(--color-primary-variant)] hover:text-white transition-colors"
        >
          Scroll Down
        </a>

        <div className="absolute bottom-25 left-4 sm:left-8 flex flex-col items-center gap-4 after:w-[1px] after:h-10 after:bg-[var(--color-primary-variant)]">
          <HomeSocials />
        </div>

      </div>
    </section>
  )
}

export default Home