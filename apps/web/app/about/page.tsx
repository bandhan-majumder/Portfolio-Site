import React from 'react'
import Image from 'next/image'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import { MdEmail } from 'react-icons/md'

function Page() {
  return (
    <div className='min-h-screen flex flex-col items-center gap-4 p-4'>
      <div className='text-3xl md:text-4xl font-bold text-white underline decoration-[#665499] decoration-4'>
        About Me
      </div>
      <div className='w-full flex flex-col md:flex-row items-center justify-center gap-8 p-4 rounded-lg'>
        <div>
          <Image
            src="/profile2.jpeg"
            alt="Bandhan Majumder"
            width={200}
            height={200}
            className="rounded-xl md:rounded-2xl shadow-lg"
          />
        </div>
        <div className='max-w-[600px] text-center md:text-left'>
          <p className='text-lg md:text-xl text-white'>
            Hi, I'm Bandhan Majumder. I am driven by curiosity in computer science. In the vast area, I have been currently exploring Full Stack and Cloud technologies.
          </p>
          <p className='mt-4 text-lg md:text-xl text-white'>
            I like to implement stuffs via building or contributing to open source projects. I love the community of open source. The mentorship, the collaboration, and the learning opportunities are invaluable.
          </p>
          <p className='mt-4 text-lg md:text-xl text-white'>
            I am currently working as a Software Engineer Intern at{' '}
            <a
              href="https://www.vozi.in/"
              target="_blank"
              rel="noopener noreferrer"
              className='text-[#d1592d] hover:underline'
            >
              Vozi
            </a>
            . I am also an active contributor of the{' '}
            <a
              href="https://github.com/CycloneDX/cdxgen"
              target="_blank"
              rel="noopener noreferrer"
              className='text-[#d1592d] hover:underline'
            >
              cdxgen <span className='text-white'>(OWASP CycloneDX Generator)</span>
            </a>
          </p>
          <p className='mt-4 text-lg md:text-xl text-white'>
          I write blogs. You can find my blogs{' '}
            <Link
              href="/blog"
              target="_blank"
              rel="noopener noreferrer"
              className='text-[#d1592d] hover:underline'
            >
              here
            </Link>
            . Connect with me on socials, links are below :)
          </p>
          {/* TODO */}
          <p className='mt-4 text-lg md:text-xl text-white hidden'>
            You can find my resume{' '}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className='text-[#d1592d] hover:underline'
            > here</a>.
          </p>
          <p className='mt-5 text-lg md:text-xl text-white'>
            <div className='flex items-center justify-center gap-4 mt-2'>
              <div>
                <Link href={"https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=bandhanmajumder16@gmail.com"} target='_blank'><MdEmail size={26}/></Link>
              </div>
              <div>
                <Link href={"https://github.com/bandhan-majumder"} target='_blank'><Github /></Link>
              </div>
              <div>
                <Link href={"https://www.linkedin.com/in/bandhan-majumder/"} target='_blank'><Linkedin /></Link>
              </div>
              <div>
                <Link href={"https://twitter.com/MEbandhan"} target='_blank'><Twitter /></Link>
              </div>
              <div>
                <Link href={"https://www.instagram.com/bandhan.majumder/"} target='_blank'><Instagram /></Link>
              </div>
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page
