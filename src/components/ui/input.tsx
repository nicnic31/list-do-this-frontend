import { forwardRef } from "react";

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  label?: string;
  error?: string;
  className?: string;
  inputClassName?: string;
  type?: "text" | "number" | "checkbox" | "search" | "password";
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      error,
      label,
      type = "text",
      className,
      inputClassName,
      ...props
    },
    ref
  ) => {
    return (
      <div className="text-left">
        <label className="font-medium text-base">{label}</label>
        <input
          type={type}
          ref={ref}
          {...props}
          className={`w-full my-2 py-2 px-3 text-sm bg-brown-50 rounded border border-brown-60 tracking-wide ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
