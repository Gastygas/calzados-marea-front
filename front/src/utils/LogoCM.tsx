import Image from "next/image";
import Logo from "../../assets/cm logo.png";

export const LogoCM = ({width}:any) => <Image src={Logo} alt="Logo Calzados Marea" width={width ? width : 50} />