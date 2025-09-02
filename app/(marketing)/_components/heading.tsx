"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

export const Heading = () => {
    const {isAuthenticated, isLoading} = useConvexAuth();
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl md:text-6xl sm:text-5xl font-bold">
                Your Ideas & Plans, Unified. Welcome to <span className="underline">NoteSphere</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                NoteSphere is the conected workspace for your ideas and plans, <br /> where you can create, organize, and share your thoughts seamlessly.
            </h3>
            {isLoading && (
               <div className="w-full flex items-center justify-center">
                 <Spinner size="lg"/>
               </div>  
            )}
            {isAuthenticated && !isLoading && (
            <Button asChild>
                <Link href="/documents">
                Enter NoteSphere
                <ArrowRight className="h-4 w-4 ml-2"/>
                </Link>
            </Button>
            )}
            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button>
                        Get NoteSphere Free
                        <ArrowRight className="h-4 w-4 ml-2"/>  
                    </Button>
                </SignInButton>
            )}
        </div>
    )
}