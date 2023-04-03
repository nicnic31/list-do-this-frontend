import { useFormContext } from "react-hook-form";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";
import ErrorMessage from "../error-message/error-message";

export interface ViewPasswordProps {
  isViewPassword: boolean;
  inputLabel: string;
  error_message: string | undefined;
  error_label: any;
  register: any;
  handleViewPassword: () => void;
}
export default function ViewPassword({
  inputLabel,
  isViewPassword,
  error_message,
  error_label,
  register,
  handleViewPassword,
}: ViewPasswordProps) {
//   const { register } = useFormContext();
  return (
    <div className="relative">
      <Input
        label={inputLabel}
        type={isViewPassword ? "text" : "password"}
        {...register}
      />
      {error_label && (<ErrorMessage message={error_message}/>)}
      <div className="absolute right-3 top-7">
        <Button
          type="button"
          onClick={handleViewPassword}
          shape="circle"
          variant="text"
        >
          <FontAwesomeIcon
            icon={isViewPassword ? faEye : faEyeSlash}
            className="h-3.5"
          />
        </Button>
      </div>
    </div>
  );
}
