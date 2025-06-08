import React from 'react'
import Image from 'next/image'
import GitHubCalendar from 'react-github-calendar'
import Link from 'next/link'
import { BriefcaseBusiness, Github } from 'lucide-react'

function Experiences() {
  const experiences = [
    {
      company: "Cdxgen",
      role: "Infrastructure Engineer",
      timeline: "June 2025 - Present",
      description: "Working on the CycloneDX Generator (cdxgen). Contributing and learning about infrastructure engineering daily with the guidance of awesome mentor(s).",
      img: "/cdxgen.png",
      stack: "Infrastructure Engineering, CycloneDX"
    },
    {
      company: "Vozi",
      role: "Software Engineer Intern",
      timeline: "Nov 2024 - Present",
      description: "I have been developing multiple Nextjs applications both as monorepo and single repos. I have also been building mobile applications with React Native. I have built Whatsapp Bot for booking tickets.",
      img: "/vozi.png",
      stack: "Turbo repo, Nextjs, Docker, Nest, React Native, Tanstack Query, Redis, React, Tailwind, ShadCN"
    },
    {
      company: "Palisadoes",
      role: "Open Source Contributor",
      timeline: "Nov 2024 - May 2025",
      description: "I have worked with Vitest, GraphQL, Mercurius, Drizzle, Postgres, MongoDB, React, TypeScript. Before the migration from NoSQL to SQL database, I have written multiple unit tests, worked with GraphQL in both frontend and backend. After the migration, I have helped refactoring legacy code of important screens with maximum code coverage in both unit and integration tests, implemented better code structure that includes both api and frontend. Changed database schema for better data fetching with graphql. I have also reviewed pull request, suggested scalable solutions to implement.",
      img: "/palisadoes.png",
      stack: "Vitest, GraphQL, Mercurius, Drizzle, Postgres, MongoDB, React, TypeScript"
    },
  ]

  return (
    <div className="min-h-screen px-4 py-8">
      <div className='flex flex-col items-center mb-16'>
        <div className='text-3xl font-bold text-white underline decoration-[#665499] decoration-4 text-center mb-16 flex gap-2'>
        Contributions Graph
        <div className='flex items-center justify-center'>
          <Link href={"https://github.com/bandhan-majumder"} className='text-xl text-white flex gap-2'> 
        <Github /></Link>
        </div>
      </div>
        <GitHubCalendar 
          username="bandhan-majumder" 
          blockSize={15} 
          blockMargin={5} 
          fontSize={16} 
          showWeekdayLabels={true} 
          hideColorLegend={true} 
          colorScheme='dark'
          errorMessage='Could not fetch data, please try again later.'
          style={{
            color: '#fff',
          }}
          weekStart={0}
        />
      </div>
      <div className='flex flex-col items-center mb-4'>

      <div className='text-3xl font-bold text-white underline decoration-[#665499] decoration-4 text-center mb-16 flex gap-2'>
        My Experiences
        <div className='flex items-center justify-center'>
          <BriefcaseBusiness />
        </div>
      </div>
      </div>
      
      <div className='max-w-4xl mx-auto space-y-12'>
        {experiences.map((exp, index) => (
          <div key={index} className='flex justify-between backdrop-blur-sm border border-gray-600 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 group min-h-[300px] p-6'>
            <div className='flex flex-col justify-center'>
              <div className='mb-4'>
                <h3 className='text-xl font-bold text-white mb-1'>{exp.company}</h3>
                <p className='text-gray-400 text-sm mb-1'>Role: {exp.role}</p>
                <p className='text-gray-400 text-sm'>Date: {exp.timeline}</p>
              </div>
              <div className='w-20 h-20 bg-white flex items-center justify-center shadow-lg rounded-xl'>
                <Image src={exp.img} width={200} height={200} alt='image' className='rounded-xl'  />
              </div>
            </div>
            
            <div className='flex-1 flex flex-col justify-between max-w-md'>
              <div>
                <p className='text-gray-300 leading-relaxed mb-6 text-sm'>{exp.description}</p>
                <div className='mb-6'>
                  <div className='flex flex-wrap gap-2'>
                    {exp.stack.split(', ').map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className='px-3 py-1 bg-[#665499]/20 text-purple-300 text-xs rounded-full border border-[#665499]/30'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experiences