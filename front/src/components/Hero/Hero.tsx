import Image from "next/image";
import heroPng from "../../../assets/banner.jpeg";
import heroPhone from "../../../assets/bannerPhone2.png";
const Hero = () => {
  return (
    <div className="h-screen w-full">
      <Image
        src={heroPng}
        alt="Banner"
        className="h-full w-full hidden md:block "
      />
      <Image
        src={heroPhone}
        alt="Banner"
        className="h-full w-full block md:hidden"
      />
    </div>
  );
};

export default Hero;
