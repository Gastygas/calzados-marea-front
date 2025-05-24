import styles from "./BarraDeBusqueda.module.css";
import { FiSearch } from "react-icons/fi";
import BarraDeBusquedaMasBuscados from "../BarraDeBusquedaMasBuscados/BarraDeBusquedaMasBuscados";
import { LogoCM } from "@/utils/LogoCM";
import { useState } from "react";
import { useRouter } from "next/navigation";

const BarraDeBusqueda = ({ toggleLupa }: { toggleLupa: () => void }) => {
  const [data, setData] = useState<{ buscar: string }>({ buscar: "" });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleBuscar = () => {
    if (data.buscar.trim() !== "") {
      router.push(`/buscar/${data.buscar.toLowerCase()}`); // Redirección
      toggleLupa();
    }
  };
  return (
    <>
      <div className="mt-[1vw] pr-5 flex justify-end">
        <button
          onClick={toggleLupa}
          className="uppercase font-semibold border-[0px] cursor-pointer text-lg hover:text-[#848484] duration-200"
        >
          Cerrar
        </button>
      </div>
      <div className=" flex flex-col md:flex-row w-full md:justify-between md:w-3/4 items-center">
        <div className="flex justify-start w-full">
          <LogoCM />
        </div>
        <div className="mt-5 md:mt-0 md:w-[1500px] h-[50px] rounded-[30px] flex items-center bg-[#eeeeee] justify-around ">
          <FiSearch size={25} className="ml-2" />
          <input
            type="text"
            name="buscar"
            id="buscar"
            placeholder="¿Que estas buscando?"
            onChange={handleChange}
            value={data.buscar}
            className="pl-1 text-base border-l-2 border-[#ffdd47] w-[80%] h-full bg-transparent focus-within:outline-none"
          />
          <button
            onClick={handleBuscar}
            className=" font-semibold text-base bg-[#ffdd47] h-full px-2 uppercase border-l-2 cursor-pointer border-gray-600 rounded-r-[30px] duration-300 hover:bg-[#c3a408]"
          >
            Buscar
          </button>
        </div>
      </div>
      
      <BarraDeBusquedaMasBuscados toggleLupa={toggleLupa} />
    </>
  );
};

export default BarraDeBusqueda;
