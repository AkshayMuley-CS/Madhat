"use client";

import dynamic from "next/dynamic";
import React from "react";

const ThreeBackground = dynamic(() => import("./ThreeBackground"), {
  ssr: false,
});

export default function HeroBackgroundDynamic() {
  return <ThreeBackground />;
}
