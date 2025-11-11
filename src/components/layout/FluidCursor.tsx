"use client";
import { useEffect } from "react";

import fluidCursor from "@/components/hooks/use-fluidcursor";

const FluidCursor = () => {
  useEffect(() => {
    fluidCursor();
  }, []);

  return (
    <div className="fluid-container">
      <canvas id="fluid" className="fluid-canvas"></canvas>
    </div>
  );
};
export default FluidCursor;
