import "./Button.scss";
import IButtonProps from "./Button";

const Button = (props: IButtonProps) => {
  return (
    <>
      <button className="button-component" {...props}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
