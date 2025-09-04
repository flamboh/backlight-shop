import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import * as React from "react";
import FuzzyText from "@/components/ui/text/FuzzyText";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="font-sans flex flex-col items-center justify-items-center min-h-[100vh] animated-gradient">
        <Navbar />
        <div className="flex flex-row items-center justify-items-center pt-[30vh] select-none">
          <Image
            src="/favicon.ico"
            alt="Backlight"
            className="w-[clamp(6rem,10vw,16rem)] h-[clamp(6rem,10vw,16rem)] blur-in-10 animate-in ease-in duration-2000"
            width={96}
            height={96}
          />
          <h1 className="font-caveat text-bl-light-purple -ml-20">
            <FuzzyText
              baseIntensity={0.01}
              enableHover={false}
              fontSize={"clamp(4rem,10vw,8rem)"}
            >
              {"Backlight"}
            </FuzzyText>
          </h1>
        </div>
      </div>
      <div className="font-sans flex flex-col items-center justify-items-center min-h-[100vh] bg-background border-t border-b border-foreground/40">
        <h1 className="text-4xl font-bold ">{"Hello!"}</h1>
        <Card>
          <Button>Click me</Button>
        </Card>
      </div>
    </div>
  );
}
