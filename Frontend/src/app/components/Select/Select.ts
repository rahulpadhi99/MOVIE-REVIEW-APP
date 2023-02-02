import React from "react";

export default interface ISelectCProps {
  name: string;
  label: string;
  value?: string;
  register?: any;
  error?: string;
  options?: number[];
  isValidated?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
