import { FaRegFrownOpen } from "react-icons/fa";

const ZapatillaNotFound = () => {
  return (
    <div className="h-[50vh] md:h-[70vh] w-full flex flex-col items-center justify-center text-center">
      <FaRegFrownOpen size={50} />
      <h3 className="max-w-[500px] font-semibold">
        {" "}
        No encontramos ningun producto relacionado a tu busqueda
      </h3>
      <p className="text-base md:text-lg">
        Por favor revisa e intentalo nuevamente
      </p>
    </div>
  );
};

export default ZapatillaNotFound;
