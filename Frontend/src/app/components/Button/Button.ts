import React from "react";

export default interface IButtonProps {
  kind: string;
  children: string;
  type?: any;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
