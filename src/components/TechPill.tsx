import * as Styled from "./styles/index";
import { ReactNode } from "react";

interface TechPillProps {
  icon: ReactNode;
  label: string;
}

export function TechPill({ icon, label }: TechPillProps) {
  return (
    <Styled.TechPill>
      {icon}
      <p>{label}</p>
    </Styled.TechPill>
  );
}
