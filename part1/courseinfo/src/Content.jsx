import { Part } from "./Part";

export const Content = ({ parts }) => {
  const [p1, p2, p3] = parts;

  return (
    <>
      <Part part={p1} />
      <Part part={p2} />
      <Part part={p3} />
    </>
  );
};
