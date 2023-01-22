import ISelectProps from "./Select";
import { StyledSelect, StyledLabel, StyledOption } from "./styles";

const Select = (props: ISelectProps) => {
  const { name, options, value, onChange } = props;
  return (
    <>
      <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>
      <StyledSelect name={name} id={name} value={value} onChange={onChange}>
        {options?.map((option) => {
          return <StyledOption value={option}>{option}</StyledOption>;
        })}
      </StyledSelect>
    </>
  );
};

export default Select;
