import React from 'react'
import Image from 'next/image'
import GitHubCalendar from 'react-github-calendar'
import Link from 'next/link'

function Experiences() {
  const experiences = [
    {
      company: "Cdxgen",
      role: "Infrastructure Engineer",
      timeline: "June 2025 - Present",
      description: "Working on the CycloneDX Generator (cdxgen). Contributing and learning about infrastructure engineering daily with the guidance of awesome mentor(s). Testing APIs with swagger, writing Dockerfiles for multiple languages and distros, helping setup devenv with nix and solving day to day challenges.",
      img: "/cdxgen.png",
      stack: "Infrastructure Engineering, CycloneDX",
      contriLinks: [{
        link: "https://github.com/CycloneDX/cdxgen/pulls?q=is%3Apr+author%3Abandhan-majumder+is%3Aclosed",
        text: "View my contributions"
      }]
    },
    {
      company: "OWASP Nest",
      role: "Open Source Contributor",
      timeline: "June 2025 - Present",
      description: "Working on the project Nest. Helping with the unit test and code coverage. Learning django and pytest on the go. Learning about django in built modules support. Focusing on the core development too.",
      img: "/owasp-nest.png",
      stack: "Python, Django, Pytest",
      contriLinks: [{
        link: "https://github.com/OWASP/Nest/pulls?q=is%3Apr+author%3Abandhan-majumder+is%3Aclosed",
        text: "View my contributions"
      }]
    },
    {
      company: "Vozi",
      role: "Software Engineer Intern",
      timeline: "Nov 2024 - Present",
      description: "Working with Next.js, ShadCN, Docker, Turbo repo and coolify. Building management dashboards, react-native applications and solving day to day challenges. Integrating swagger apis with frontend with tanstack and ofetch. I have also worked with redis for caching and improving performance of a whatsapp ticket booking bot.",
      img: "/vozi.png",
      stack: "Turbo repo, Nextjs, Docker, Nest, React Native, Tanstack Query, Redis, React, Tailwind, ShadCN",
      contriLinks: [{
        link: "https://vozi.in",
        text: "Visit Vozi"
      }]
    },
    {
      company: "Palisadoes",
      role: "Open Source Contributor",
      timeline: "Nov 2024 - May 2025",
      description: "I have worked with Vitest, GraphQL, Mercurius, Drizzle, Postgres, MongoDB, React, TypeScript. Before the migration from NoSQL to SQL database, I have written multiple unit tests, worked with GraphQL in both frontend and backend. After the migration, I have helped refactoring legacy code of important screens with maximum code coverage in both unit and integration tests, implemented better code structure that includes both api and frontend. Changed database schema for better data fetching with graphql. I have also reviewed pull request, suggested scalable solutions to implement.",
      img: "/palisadoes.png",
      stack: "Vitest, GraphQL, Mercurius, Drizzle, Postgres, MongoDB, React, TypeScript",
      contriLinks: [{
        link: "https://github.com/PalisadoesFoundation/talawa-admin/pulls?q=author:bandhan-majumder",
        text: "Frontend Contributions"
      }, {
        link: "https://github.com/PalisadoesFoundation/talawa-api/pulls?q=author:bandhan-majumder",
        text: "Backend Contributions"
      }]
    },
  ]

  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className='flex flex-col items-center mb-8 lg:mb-16'>
        <div className='text-2xl sm:text-3xl font-bold text-white underline decoration-[#665499] decoration-4 text-center mb-8 lg:mb-16 mt-10'>
          Contributions Graph
        </div>
        <div className="w-full max-w-4xl overflow-x-auto">
          <div className="min-w-[600px] flex justify-center">
            <GitHubCalendar
              username="bandhan-majumder"
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
        </div>
      </div>

      <div className='flex flex-col items-center mb-4'>
        <div className='text-2xl sm:text-3xl font-bold text-white underline decoration-[#665499] decoration-4 text-center mb-8 lg:mb-16'>
          My Experiences
        </div>
      </div>

      <div className='max-w-4xl mx-auto space-y-6 lg:space-y-12'>
        {experiences.map((exp, index) => (
          <div key={index} className='backdrop-blur-sm border border-gray-600 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 group p-4 sm:p-6'>
            <div className='block lg:hidden'>
              <div className='flex items-start gap-4 mb-4'>
                <div className='w-16 h-16 sm:w-20 sm:h-20 bg-white flex items-center justify-center shadow-lg rounded-xl flex-shrink-0'>
                  <Image src={exp.img} width={200} height={200} alt='company logo' className='rounded-xl' />
                </div>
                <div className='flex-1 min-w-0'>
                  <h3 className='text-lg sm:text-xl font-bold text-white mb-1 truncate'>{exp.company}</h3>
                  <p className='text-gray-400 text-sm mb-1'>Role: {exp.role}</p>
                  <p className='text-gray-400 text-xs sm:text-sm'>Date: {exp.timeline}</p>
                </div>
              </div>

              <p className='text-gray-300 leading-relaxed mb-4 text-sm'>{exp.description}</p>

              <div className='mb-4'>
                <div className='flex flex-wrap gap-2'>
                  {exp.stack.split(', ').map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='px-2 py-1 bg-[#665499]/20 text-purple-300 text-xs rounded-full border border-[#665499]/30'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {exp.contriLinks && exp.contriLinks.length > 0 && (
                <div className='flex flex-col gap-2 sm:flex-row sm:flex-wrap'>
                  {exp.contriLinks.map((obj, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={obj.link}
                      target="_blank"
                      className='bg-red-400 p-2 rounded-lg text-white text-sm hover:bg-red-500 transition-colors duration-300 text-center'
                    >
                      {obj.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className='hidden lg:flex lg:justify-between lg:min-h-[300px]'>
              <div className='flex flex-col justify-center'>
                <div className='mb-4'>
                  <h3 className='text-xl font-bold text-white mb-1'>{exp.company}</h3>
                  <p className='text-gray-400 text-sm mb-1'>Role: {exp.role}</p>
                  <p className='text-gray-400 text-sm'>Date: {exp.timeline}</p>
                </div>
                <div className='w-20 h-20 bg-white flex items-center justify-center shadow-lg rounded-xl'>
                  <Image src={exp.img} width={200} height={200} alt='company logo' className='rounded-xl' />
                </div>
              </div>

              <div className='flex-1 flex flex-col justify-between max-w-md ml-8'>
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
                <div>
                  {exp.contriLinks && exp.contriLinks.length > 0 && (
                    <div className='flex flex-wrap gap-2'>
                      {exp.contriLinks.map((obj, linkIndex) => (
                        <Link
                          key={linkIndex}
                          href={obj.link}
                          target="_blank"
                          className='bg-red-400 p-2 rounded-lg text-white text-sm hover:bg-red-500 transition-colors duration-300'
                        >
                          {obj.text}
                        </Link>
                      ))}
                    </div>
                  )}
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