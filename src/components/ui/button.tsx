import React, { useRef, forwardRef } from "react";

export type VariantNames = "text" | "contained" | "outlined";
export type ShapeNames = "rounded" | "pill" | "circle";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantNames;
  shape?: ShapeNames;
  isLoading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      isLoading,
      disabled,
      variant = "contained",
      shape = "rounded",
      color = "primary",
      type="button",
      onClick,
      ...buttonProps
    },
    ref: React.Ref<HTMLButtonElement | null>
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    let buttonStyle = "";
    let buttonShape = "";

    // setting the buttonStyle depends on the chosen variant
    switch (variant) {
      case "contained":
        buttonStyle =  `${disabled ? 'bg-[#CFB997]' : 'bg-brand text-white hover:bg-dark-brand'}`;
        break;
      case "outlined":
        buttonStyle =
          "bg-transparent text-brand border border-brand hover:bg-brown-60 hover:text-dark-brand";
        break;
      case "text":
        buttonStyle = "bg-transparent text-brand hover:text-dark-brand";
        break;
    }

    switch (shape) {
      case "rounded":
        buttonShape = "rounded";
        break;
      case "pill":
        buttonShape = "rounded-full";
        break;
      case "circle":
        buttonShape = "rounded-full";
    }

    return (
      <button
        ref={buttonRef}
        type={type}
        className={`w-full p-2.5 ${buttonStyle} ${buttonShape} ${
          disabled
            ? "cursor-not-allowed text-white"
            : "transition ease-in-out delay-150 hover:drop-shadow-2xl hover:-translate-y-1 "
        } ${className}`}
        onClick={onClick}
        disabled={disabled}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
