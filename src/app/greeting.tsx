import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Greeting() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center">
      <div className="flex flex-col gap-3 text-center text-4xl font-medium md:text-5xl lg:text-6xl">
        <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
          Hello, Scott
        </span>
        <span className="text-[#c4c7c5]">Summarize a webpage!</span>
      </div>
      <Link href="/summary" className="mt-9">
        <Button className="h-9 w-28 text-xs md:h-10 md:w-32 md:text-sm">
          GET STARTED
        </Button>
      </Link>
    </div>
  );
}
