"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl md:text-6xl sm:text-5xl font-bold">
                Your Ideas & Plans, Unified. Welcome to <span className="underline">NoteSphere</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                NoteSphere is the conected workspace for your ideas and plans, <br /> where you can create, organize, and share your thoughts seamlessly.
            </h3>
            <Button>
                Enter NoteSphere
                <ArrowRight className="h-4 w-4 ml-2"/>
            </Button>
        </div>
    )
}