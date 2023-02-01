import React from "react";

export default interface ISelectCProps {
  name: string;
  label: string;
  value?: string;
  options?: number[];
  isValidated?: boolean;
  register?: any;
  error?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
