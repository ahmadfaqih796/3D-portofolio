"use client";
import { About, Contact, Experience, Hero, Navbar } from "@/components";
import { StarsCanvas } from "@/components/canvas";
import { BrowserRouter } from "react-router-dom";

export default function Home() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-[url('/herobg.png')] bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
