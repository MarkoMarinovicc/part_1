import React from "react";

const Button = (props) => {
  return <button onClick={() => props.mutable(props.value + 1)}>{props.text}</button>;
};

export default Button;
