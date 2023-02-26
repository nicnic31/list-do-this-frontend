import Image from "next/image";
import LoginSideImg from '@/assets/images/login-img.png';

function LoginSideImage(){
    return(
        <div className="w-full">
            <Image alt="login-side-images" src={LoginSideImg} className="h-screen"/>
        </div>
    )
}

export default LoginSideImage