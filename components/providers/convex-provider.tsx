"use client";

import { ReactNode } from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";

// const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
const convex = new ConvexReactClient("https://perceptive-sturgeon-318.convex.cloud");

export const ConvexClientProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  return (
    <ClerkProvider
      // publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
      publishableKey={"pk_test_Y29ycmVjdC1zYWxtb24tOTcuY2xlcmsuYWNjb3VudHMuZGV2JA"}
    >
      <ConvexProviderWithClerk
        useAuth={useAuth}
        client={convex}
      >
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};
