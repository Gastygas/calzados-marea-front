import Image from "next/image";
import heroPng from "../../../assets/hero3.png"
const Hero = () => {
  return <div className="h-screen w-full">
    <Image src={heroPng} alt="Banner" className="h-full w-full" />
  </div>;
};

export default Hero;
