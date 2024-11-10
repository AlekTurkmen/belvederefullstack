import Image from "next/image";
import ProgressDemo from "@/components/ProgressDemo" // Import ProgressDemo componen
import {ModeToggle} from "@/components/ModeToggle"; // Import ModeToggle component

export default function Home() {
  return (
    <div className="grid grid-rows-[0px_1fr_0px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="row-start-1 flex gap-6 flex-wrap items-center justify-center">     
      <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
          rel="noopener noreferrer"
        >
          Home
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/user-data"
          rel="noopener noreferrer"
        >
          User Data Testing
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/login"
          rel="noopener noreferrer"
        >
          Sign In
        </a>
        <ModeToggle />
      </header>

      
      <main className="flex flex-col gap-8 row-start-2 items-center">    
        <a className="text-4xl font-bold"> 🚧<span style={{ color: '#438361' }}>Project Belvedere</span> Is Under Construction 🚧</a>  
        <ProgressDemo />
        <div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
            <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#438361] dark:hover:bg-[#438361] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://alekturkmen.com/project-belvedere"
            target="_blank"
            rel="noopener noreferrer"
            >
            Our Offer
            </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#438361] dark:hover:bg-[#438361] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://app.formbricks.com/s/cm37zuhz0000bc4b4132dinci?suId=c9d73699e949b625e9ff29f839129202:cd2a9f994e4cec124bb69dd81af88cc7cc19f03776dd7335fee7387b06336260"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign Up
          </a>
        </div>
      </main>

      
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/alekturkmen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright © Alek Turkmen (test)
        </a>
      </footer>
    </div>
  );
}
