import "./Select.scss";
import ISelectProps from "./Select";

const Select = (props: ISelectProps) => {
  const { name, options } = props;
  return (
    <>
      <label htmlFor={props.name} className="label-component">
        {props.label}
      </label>
      <select name={name} id={name} className="select-component">
        {options.map((option) => {
          return (
            <option value={option} className="option-component">
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
