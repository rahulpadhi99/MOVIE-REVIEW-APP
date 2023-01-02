import React from "react";

export default interface IButtonProps {
  kind: string;
  children: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
