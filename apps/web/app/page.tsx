import Hero from "../components/Hero";
import { Appbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { HomeBlogs } from "../components/blogs/BlogWithTabs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Appbar />
      <Hero />
      <Footer />
    </div>
  );
}
