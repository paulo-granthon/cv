import { ReactElement } from "react";

interface DescriptionProps {
  desc: string;
}

export const Description = ({ desc }: DescriptionProps): ReactElement => (
  <p className="experience__description">{desc}</p>
);
