"use client";

import React from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";

const convexUrl = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export const ConvexClientProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <ClerkProvider 
        publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
        >
            <ConvexProviderWithClerk 
            useAuth={useAuth}
client={convexUrl}
            >
                {children}
            </ConvexProviderWithClerk>
        </ClerkProvider>    
)
}