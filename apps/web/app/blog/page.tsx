import React from 'react'
import { HomeBlogs } from '../../components/blogs/BlogWithTabs'
import { Appbar } from '../../components/Navbar'
import SearchBar from '../../components/SearchBar'

function page() {
    return (
        <div className='w-full h-full'>
            <div className='text-[#737881] text-xl text-center mt-10 mx-auto'>
                <p>I write blogs about various topics.</p>
                <p>This includes the things I learn, explore and find exciting.</p>
                <p>Subscribe to my newsletter below to get updated blogs message!</p>
            </div>
            <div className="flex flex-col justify-center items-center mt-10">
                <SearchBar />
            </div>
            <div className="mt-10 h-auto">
                <div>
                    <HomeBlogs />
                </div>
            </div>
        </div>
    )
}

export default page