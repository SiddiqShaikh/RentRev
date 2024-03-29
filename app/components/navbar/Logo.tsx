"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      alt="logo"
      src="/images/logo.png"
      className="cursor-pointer hidden md:block"
      height={100}
      width={100}
    />
  );
};

export default Logo;
