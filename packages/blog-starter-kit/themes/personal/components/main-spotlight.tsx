import React from "react";
import { cn } from "../utils/cn";
import { Spotlight } from "./ui/spotlight";
import { PersonalHeader } from "./personal-theme-header";
import EpochTracker from '../components/EpochTracker';

export function MainSpotlight() {
  return (
    <div className="h-[32rem] w-full rounded-2xl border dark:border-neutral-800 border-neutral-300 flex flex-col md:items-center dark:bg-transparent  antialiased relative overflow-hidden">
		
      <Spotlight
        className="-top-20 left-30 md:left-60 md:-top-20"
        fill=""
      />
        <div className="h-[70rem] w-full  dark:bg-neutral-900 bg-neutral-900  dark:bg-dot-white/[0.2] bg-dot-white/[0.2] relative flex  flex-col items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-neutral-800 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-neutral-800 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 dark:from-neutral-100 dark:to-neutral-400 p-4 bg-opacity-50">
            Epoch 1211 <br /> is coming.
          </h1>
          <div className="">
          <EpochTracker/>
          </div>
          <p className="mt-4 font-normal text-base text-neutral-400 max-w-lg text-center mx-auto">
            A first of its kind event in crypto.<br></br> Your participation is <span className="font-bold text-[#ffffff]">key</span>.
          </p>
        </div>	  
    </div>
  );
}
