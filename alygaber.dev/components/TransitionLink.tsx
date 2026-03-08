"use client";

import { useRouter } from "next/navigation";
import React, { ReactNode } from "react";

export default function TransitionLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const router = useRouter();

  const handleTransition = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // We navigate using standard router push. 
    // The AnimatePresence in layout.tsx will handle keeping the old page alive 
    // long enough for the shared layoutId to animate.
    router.push(href);
  };

  return (
    <a href={href} onClick={handleTransition} className={className}>
      {children}
    </a>
  );
}
