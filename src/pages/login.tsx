import { NextPage } from "next";

import Input from "@/components/ui/input";
import LoginLayout from "@/layout/login-layout";
import EyeSlashIcon from "@/components/icons/eye-slash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

const Login: NextPage = () => {
  return (
    <LoginLayout>
      <div className="py-4 w-full text-center px-[15%]">
        <h1 className="font-bold text-4xl my-4">Welcome back!</h1>
        <p className="text-sm my-3 font-medium">
          Enter your username and password to continue...
        </p>
        <div className="my-8">
          <div className="my-5">
            <Input label="Username" type="text" />
          </div>
          <div className="my-5">
            <div className="relative">
              <Input label="Password" type="password" />
              <div className="absolute right-4 top-10">
                <FontAwesomeIcon icon={faEyeSlash} className="h-4"/>
              </div>
            </div>
            <div className="text-right w-full">
              <Link href="/" className="text-xs">Forgot password?</Link>
            </div>
          </div>
        </div>
      </div>
    </LoginLayout>
  );
};

export default Login;
