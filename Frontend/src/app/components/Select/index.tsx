import ISelectProps from "./Select";
import {
  StyledSelect,
  StyledLabel,
  StyledOption,
  StyledConstOption,
} from "./styles";

const Select = (props: ISelectProps) => {
  const { name, options, value, onChange } = props;
  return (
    <>
      <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>
      <StyledSelect name={name} id={name} value={value} onChange={onChange}>
        <StyledConstOption value="">-Select-</StyledConstOption>
        {options?.map((option) => {
          return <StyledOption value={option}>{option}</StyledOption>;
        })}
      </StyledSelect>
    </>
  );
};

export default Select;
