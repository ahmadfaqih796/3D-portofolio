"use client";
import { About, Hero, Navbar } from "@/components";
import { BrowserRouter } from "react-router-dom";

export default function Home() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
        </div>
      </BrowserRouter>
    </>
  );
}
