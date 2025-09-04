import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/ui/navbar";
import * as React from "react";

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center min-h-[200vh] animated-gradient">
      <Navbar />

      <h1 className="text-4xl font-bold ">{"Hello!"}</h1>
      <Card>
        <Button>Click me</Button>
      </Card>
    </div>
  );
}
