import React from "react";
import "./input.css";

export const Input = ({
  children,
  variant,
  type,
  className,
  id,
  startIcon,
  endIcon,
}) => {
  return (
    <Input id={id} type={type} className={className + " input " + variant}>
      {startIcon ? <span>{startIcon}</span> : ""}
      <span>{children}</span>
      {endIcon ? <span>{endIcon}</span> : ""}
    </Input>
  );
};
