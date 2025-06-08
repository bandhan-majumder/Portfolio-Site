"use client";
import React from 'react'
import Image from 'next/image'
import { Facebook } from 'lucide-react'
import { MdEmail } from 'react-icons/md'
import toast from 'react-hot-toast'

function Page() {
  const onSupportClick = () => {
    toast.success("Url copied to clipboard!");
  };

  const goToHomePage = () => {
    window.location.href = '/';
  };

  return (
    <div className='min-h-screen flex flex-col items-center gap-4 p-4'>
      <div className='text-3xl md:text-4xl font-bold text-white underline decoration-[#665499] decoration-4'>
        About Me
      </div>
    </div>
  )
}

export default Page
