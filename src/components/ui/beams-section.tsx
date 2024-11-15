"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const BackgroundBeamsWithCollision = dynamic(
  () => import("@/components/ui/background-beams-with-collision").then(mod => mod.BackgroundBeamsWithCollision),
  { ssr: false }
);

export const BeamsSection = () => {
  return (
    <div className="fixed inset-0 w-full h-full">
      <Suspense fallback={<div className="h-full w-full bg-neutral-950" />}>
        <BackgroundBeamsWithCollision className="!h-full" />
      </Suspense>
    </div>
  );
};
