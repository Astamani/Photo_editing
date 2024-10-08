import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
import Logo from "./Logo";

function HeroSection() {
  return (
    <div
      className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="red"
      />
      <div className="p-4 relative z-10 w-full text-center flex items-center justify-center flex-col" >
        <div>
          <Logo/>
        </div>
        <h1
          className="p-2 mt-20 md:mt-0 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
        >Capturing Moments, Creating Memories</h1>
        <p
          className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
        >Capturing your special moments with thoughtful photography, video recording, and careful photo editing. We turn your memories into lasting treasures with love and care.</p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore
            </Button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default HeroSection