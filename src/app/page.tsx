import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/ui/navbar";
import Image from "next/image";
import * as React from "react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="font-sans flex flex-col items-center justify-items-center min-h-[100vh] animated-gradient">
        <Navbar />
        <div className="flex flex-row items-center justify-items-center pt-[30vh]">
          <Image
            src="/favicon.ico"
            alt="Backlight"
            className="w-[10vw] h-[10vw]"
            width={96}
            height={96}
          />
          <h1 className="font-bold font-caveat text-[8vw] text-">
            {"Backlight"}
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
