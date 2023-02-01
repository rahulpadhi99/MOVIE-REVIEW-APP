import React from "react";

export default interface IButtonProps {
  kind: string;
  type?: any;
  children: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
