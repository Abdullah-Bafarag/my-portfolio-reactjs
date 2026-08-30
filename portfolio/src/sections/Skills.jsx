import React from 'react'
import { SectionHeader } from '../components/SectionHeader'
import { SkillCard } from '../components/SkillCard';
import Js from '../assets/techs/javascript.svg'
import ReactImg from '../assets/techs/react.svg'
import ExpressImg from '../assets/techs/expressjs.svg'
import Tailwind from '../assets/techs/tailwindcss.svg'
import Flutter from '../assets/techs/flutter.svg'
import GitHub from '../assets/techs/github.svg'
import Typescript from '../assets/techs/typescript.svg'
import MongoDb from '../assets/techs/mongo.svg'
  
const Skills = () => {

  const skills = [
    {
      id: 1,
      name: 'JavaScript',
      category: 'Frontend / Backend',
      image: Js, // مسار الصورة لديك
    },
    {
      id: 2,
      name: 'TypeScript',
      category: 'Full Stack',
      image: Typescript,
    },
    {
      id: 3,
      name: 'React.js',
      category: 'Frontend Web',
      image: ReactImg,
    },
    {
      id: 4,
      name: 'Tailwind Css',
      category: 'User Interface',
      image: Tailwind,
    },
    {
      id: 5,
      name: 'Express.js',
      category: 'Backend',
      image: ExpressImg,
    },
    {
      id: 6,
      name: 'Flutter',
      category: 'Mobile Apps',
      image: Flutter,
    },
    {
      id: 7,
      name: 'GitHub',
      category: 'Version Control',
      image: GitHub
    },
    {
      id: 8,
      name: 'Mongo DB',
      category: 'Database',
      image: MongoDb
    },
  ];


  return (
    <section id='skills'>
      <SectionHeader
        subtitle="What skills I have"
        title="My Expreience"
      />
      {/* container */}
      <div>
        {/* card skill */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5 px-4 sm:px-8 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              image={skill.image}
              name={skill.name}
              category={skill.category}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills