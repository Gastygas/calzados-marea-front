import Image from "next/image";
import Logo from "../../assets/cm logo.png";
import Link from "next/link";

export const LogoCM = ({width}:any) => <Link href="/"><Image src={Logo} alt="Logo Calzados Marea" width={width ? width : 50} className="rounded-[10px]" /></Link>