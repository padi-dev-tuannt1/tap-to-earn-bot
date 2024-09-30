import GameLevelProgress from "./components/games/GameLevelProgress";
import TapGlobe from "./components/games/Globe";
import CurrentPoints from "./components/tasks/CurrentPoints";

export default function Home() {
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
