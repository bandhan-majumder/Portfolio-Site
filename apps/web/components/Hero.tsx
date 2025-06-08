import Image from "next/image";

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
                    </div>
                    <div>
<Image src={"/profile.jpeg"} width={400} height={400} alt="a" className="rounded-xl"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
