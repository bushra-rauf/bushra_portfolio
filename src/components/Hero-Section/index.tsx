"use client"
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
    return(
      <section className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 text-white min-h-screen flex items-center justify-center px-6 py-20 pl-44">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Hi, I'm Bushra Rauf👋</h1>
        <p className="text-lg md:text-xl mb-8">
          A passionate web developer crafting stunning experiences with React, Next.js & Tailwind CSS.
        </p>
        <Link
          href="#projects"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
        >
          View My Work
        </Link>
      </div>
    
        <div
          style={{
          clipPath: "polygon(0 100%, 200% -480%, 100% 100%, 0% 100%, 0 100%)",
          borderRadius: "10px",
          backgroundColor: "transparent",
          overflow: "hidden"
         }}>

         <Image src='/images/my-pic.jpg' alt='my picture' width={700} height={400}  />
 </div>
    </section>

    );
}

export default HeroSection