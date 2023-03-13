import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-regular-svg-icons";

export interface ViewPasswordProps {
    isViewPassword: boolean;
    inputLabel: string;
    handleViewPassword: () => void;
}
export default function ViewPassword({inputLabel, isViewPassword, handleViewPassword}: ViewPasswordProps) {
  return (
    <div className="relative">
      <Input label={inputLabel} type={isViewPassword ? "text" : "password"} />
      <div className="absolute right-3 top-7">
        <Button type="button" onClick={handleViewPassword} shape="circle" variant="text">
          <FontAwesomeIcon icon={isViewPassword ? faEye : faEyeSlash} className="h-3.5" />
        </Button>
      </div>
    </div>
  );
}
