"use client";

import React from "react";
import useLenis from "@/components/hooks/useLenis"; // <-- Import here

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useLenis(); // initialize Lenis on mount
  return <div>{children}</div>;
}
