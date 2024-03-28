import React from "react";
import { cn } from "../utils/cn";
import { Spotlight } from "./ui/spotlight";
import { PersonalHeader } from "./personal-theme-header";
import EpochTracker from '../components/EpochTracker';

export function MainSpotlight() {
  return (
    <div className="h-[32rem] w-full rounded-xl flex flex-col md:items-center dark:bg-transparent  antialiased relative overflow-hidden">
		<PersonalHeader />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#d7ff38"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-500 to-neutral-800 dark:from-neutral-50 dark:to-neutral-400 p-4 bg-opacity-50">
          Epoch 1211 <br /> is coming.
        </h1>
		<div className="">
		<EpochTracker/>
		</div>
        <p className="mt-4 font-normal text-base text-neutral-400 max-w-lg text-center mx-auto">
          A first of its kind event in crypto.<br></br> Your participation is key.
        </p>
      </div>

	  
    </div>
  );
}
