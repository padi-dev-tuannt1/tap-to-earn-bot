"use client"
import { useEffect } from "react";
import GameLevelProgress from "./components/games/GameLevelProgress";
import TapGlobe from "./components/games/Globe";
import CurrentPoints from "./components/tasks/CurrentPoints";
import { retrieveLaunchParams } from '@telegram-apps/sdk';
export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { initDataRaw } = retrieveLaunchParams();
        console.log(initDataRaw);
        const response = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: {
            Authorization: `tma ${initDataRaw}`,
          },
          
        });
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (typeof window !== 'undefined') {
      fetchData(); // Invoke the async function inside useEffect
    }
  }, []); // Empty array ensures this effect runs only once

  return (
    <section className="flex items-center justify-between flex-col h-full  text-white/80 overflow-y-auto py-12">
    <CurrentPoints />
    <TapGlobe/>
    <div className='flex flex-col gap-y-4'>
        <GameLevelProgress />
      </div>
  </section>
  );
}
