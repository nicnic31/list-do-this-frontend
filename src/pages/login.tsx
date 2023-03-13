import { NextPage } from "next";
import {useState} from "react";

import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import LoginLayout from "@/layout/login-layout";
import ViewPassword from "@/components/view-password/view-password";
import Link from "next/link";

const Login: NextPage = () => {
  const [viewPassword, setViewPassword] = useState(false);

  return (
    <LoginLayout>
      <div className="py-4 w-full text-center px-[15%]">
        <h1 className="font-bold text-4xl my-4">Welcome back!</h1>
        <p className="text-sm my-3 font-medium">
          Enter your username and password to continue...
        </p>
        <form>
          <div className="my-8">
            <div className="my-5">
              <Input label="Username" type="text" />
            </div>
            <div className="my-5">
              <ViewPassword
                isViewPassword={viewPassword}
                inputLabel="Password"
                handleViewPassword={() => setViewPassword(!viewPassword)}
              />
              <div className="text-right w-full">
                <Link href="/" className="text-xs">
                  Forgot password?
                </Link>
              </div>
            </div>
          </div>

          <Button variant="contained" onClick={() => alert("GOT CLICKED")} type="submit">
            Login
          </Button>
        </form>

        <div className="w-full mt-8 text-xs">
          <p className="text-gray-70">
            Do not have account yet?
            <Link href="">
              <span className="mx-1 text-brand hover:text-dark-brand">
                Sign up
              </span>
            </Link>
          </p>
        </div>
      </div>
    </LoginLayout>
  );
};

export default Login;
