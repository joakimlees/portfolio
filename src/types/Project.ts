import { ReactNode } from "react";

export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  techPills: ReactNode[];
}
