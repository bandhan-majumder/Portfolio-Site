import Hero from "../components/Hero";
import { Appbar } from "../components/Navbar";
import Footer from "../components/Footer";
import { HomeBlogs } from "../components/blogs/BlogWithTabs";
import Image from "next/image";
import Experiences from "../components/Experiences";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Appbar />
      <Hero />
      <Experiences />
      <Footer />
    </div>
  );
}
