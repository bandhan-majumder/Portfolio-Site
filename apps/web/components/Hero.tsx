import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-[calc(100vh-17rem)] flex justify-center">
      <div className="flex flex-col gap-4 justify-center items-center w-[90vw] md:w-[60vw] min-h-[calc(100vh-17rem)] rounded-2xl shadow-lg shadow-neutral-600/5 backdrop-blur-lg p-3">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between w-full h-full">
          <div>
            <div className="text-center text-gray-200 text-4xl font-semibold font-mono">Hi! I'm</div>
            <div className="font-mono">
              <p className="text-center text-4xl md:text-7xl text-[#7A4D44] font-semibold tracking-tighter">Bandhan Majumder</p>
              <div className="text-gray-400 text-xl md:text-xl font-mono mt-4 text-center tracking-tighter">
                <p>Computer science enthusiast.</p>
                <p>Love contributing to open source.</p>
                <p>Play chess & write Blogs!</p>
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
          <div className="flex-shrink-0">
            <div>
              <Image src={"/profile.jpeg"} width={300} height={300} alt="a" className="rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}