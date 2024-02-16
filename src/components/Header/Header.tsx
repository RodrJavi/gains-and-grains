import type { FC } from "react";

export type Props = {
  back: boolean;
  text: string;
  logout: boolean;
};

export const Header: FC<Props> = ({ back, text, logout }) => {
  return (
    <header>
      {back && "back button"}
      <p>{text}</p>
      {logout && "logout button"}
    </header>
  );
};
