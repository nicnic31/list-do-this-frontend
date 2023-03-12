import { ReactElement } from "react";

import LoginSideImage from "@/components/login-side-image";
import LogoHeader from "@/components/logo-header";

interface LoginLayoutProps {
  children: ReactElement;
}

function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <div className="w-full flex flex-row h-screen">
      <div className="w-2/4 px-4">
        <LogoHeader />
        <div className="mt-7">{children}</div>
      </div>
      <div className="w-2/4">
        <LoginSideImage />
      </div>
    </div>
  );
}

export default LoginLayout;
