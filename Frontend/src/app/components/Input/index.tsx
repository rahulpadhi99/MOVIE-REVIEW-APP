import "./Input.scss";
import IInputProps from "./Input";

const Input = (props: IInputProps) => {
  return (
    <>
      <label htmlFor={props.name} className="label-component">{props.label}</label>
      <input
        type={props.type}
        id={props.name}
        name={props.name}
        className="input-component"
      />
    </>
  );
};

export default Input;
