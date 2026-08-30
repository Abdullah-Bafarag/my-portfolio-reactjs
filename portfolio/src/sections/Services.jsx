import React from 'react'
import { SectionHeader } from '../components/SectionHeader'
import { ServiceCard } from '../components/ServiceCard'
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";

const Services = () => {
  return (
    <section id='service'>
      <SectionHeader
        subtitle='what I Offer'
        title='Services'
      />
      <div className='sm:grid grid-cols-3 sm:px-24 px-4 sm:gap-4 max-w-4xl sm:mx-auto'>
        <div>
          <ServiceCard
            icon={MdDesignServices}
            title='Web Design'
            subtitle='Modern & Responsive UI'
          />
        </div>
        <div>
          <ServiceCard
            icon={IoIosRocket}
            title='Fast Performance'
            subtitle='Optimized & Smooth UX'
          />
        </div>
        <div>
          <ServiceCard
            icon={FaCode}
            title='Clean Code'
            subtitle='Maintainable & Structured'
          />
        </div>
      </div>
    </section>
  )
}

export default Services