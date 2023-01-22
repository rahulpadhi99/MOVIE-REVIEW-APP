import React from "react";

export default interface ISelectCProps {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: string[];
  label?: string;
}
