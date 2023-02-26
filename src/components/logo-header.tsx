import LogoImg from "@/assets/images/logo.png";
import Image from "next/image";

function LogoHeader() {
  return (
    <div className="w-full h-24 py-4 flex flex-row items-center">
      <Image
        alt="logo"
        src={LogoImg}
        height={50}
        width={50}
        className="mix-blend-multiply"
      />
      <div className="mx-1">
        <p className="text-xl tracking-wider">
          <strong className="text-3xl mx-0.5 text-dark-brand">L</strong>
          <span className="text-brown-40">ist-do-this</span>
        </p>
      </div>
    </div>
  );
}

export default LogoHeader;
