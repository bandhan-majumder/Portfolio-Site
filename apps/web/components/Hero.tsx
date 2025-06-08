import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="h-[calc(100vh-17rem)] flex justify-center">
            <div className="flex flex-col gap-4 justify-center items-center w-[90vw] md:w-[60vw] h-[calc(100vh-17rem)] rounded-2xl shadow-lg shadow-neutral-600/5 backdrop-blur-lg p-3">
                <div className="flex gap-4 items-center justify-between w-full h-full">
                    <div>
                        <div className="text-center text-gray-200 text-4xl font-semibold font-mono">Hi! I'm</div>
                        <div className="font-mono">
                            <p className="text-center text-4xl md:text-7xl text-[#7A4D44] font-semibold tracking-tighter">Bandhan Majumder</p>
                            <div className="text-gray-400 text-xl md:text-xl font-mono mt-4 text-center tracking-tighter">
                                <p>I am a computer science enthusiast</p>
                                <p>I also love contributing to open source.</p>
                                <p>In my free time, I play chess!</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center gap-4 mt-8 text-gray-300 text-lg font-mono">
                            <div className="cursor-pointer hover:text-[#7A4D44] transition-colors duration-300 underline">
                                <Link href={"/blog"}>Blogs</Link>
                            </div>
                            <div className="cursor-pointer hover:text-[#7A4D44] transition-colors duration-300 underline">
                                <Link href={"/about"}>About</Link>
                            </div>
                        </div>
                    </div>
                   <div>
                     <div>
<Image src={"/profile.jpeg"} width={300} height={300} alt="a" className="rounded-xl"/>
                    </div>
                    <div className="text-white text-center mt-4">
                        Download my resume <a href="https://drive.google.com/file/d/1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#D97757] underline">here</a>.
                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
}
