import React from "react";
import {
  Code,
  ShieldCheck,
  Search,
  UserSearch,
  Target,
  CheckSquare,
  MonitorPlay,
  ShieldAlert,
  TerminalSquare,
  Network,
  BrainCircuit,
  Circle
} from "lucide-react";

// Explicitly register icons to allow Next.js tree-shaking
// wildcard imports (import * as Icons) break tree-shaking and load the entire library
const iconRegistry = {
  Code,
  ShieldCheck,
  Search,
  UserSearch,
  Target,
  CheckSquare,
  MonitorPlay,
  ShieldAlert,
  TerminalSquare,
  Network,
  BrainCircuit
};

export type IconName = keyof typeof iconRegistry | string;

export const IconRenderer = ({ name, className }: { name: IconName; className?: string }) => {
  const IconComponent = iconRegistry[name as keyof typeof iconRegistry];
  if (!IconComponent) return <Circle className={className} />;
  return <IconComponent className={className} />;
};
