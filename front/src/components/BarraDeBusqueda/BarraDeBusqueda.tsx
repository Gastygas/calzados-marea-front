import styles from "./BarraDeBusqueda.module.css";
import { FiSearch } from "react-icons/fi";
import BarraDeBusquedaMasBuscados from "../BarraDeBusquedaMasBuscados/BarraDeBusquedaMasBuscados";
import { LogoCM } from "@/utils/LogoCM";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BarraDeBusqueda = ({ toggleLupa }: { toggleLupa: () => void }) => {
  const [data, setData] = useState<{ buscar: string }>({ buscar: "" });
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleBuscar = () => {
    if (data.buscar.trim() !== "") {
      router.push(`/buscar/${data.buscar.toLowerCase()}`); // Redirección
      toggleLupa()
    }
  };
  return (
    <>
      <div className={styles.divBarraDeBusqueda}>
        <div className={styles.divLogo}>
          <LogoCM />
        </div>
        <div className={styles.barraDeBusqueda}>
          <div className={styles.barraDiv}>
            <FiSearch size={25} />
            <input
              type="text"
              name="buscar"
              id="buscar"
              placeholder="¿Que estas buscando?"
              onChange={handleChange}
              value={data.buscar}
            />
          </div>
          <button onClick={handleBuscar}>Buscar</button>
        </div>
        <button onClick={toggleLupa} className={styles.cerrarButton}>
          Cerrar
        </button>
      </div>
      <div className={styles.barraDeBusquedaResponsive}>
        <div className={styles.barraDiv}>
          <FiSearch size={25} />
          <input
            type="text"
            placeholder="¿Que estas buscando?"
            value={data.buscar}
          />
        </div>
        <button onClick={handleBuscar}>Buscar</button>
      </div>
      <BarraDeBusquedaMasBuscados />
    </>
  );
};

export default BarraDeBusqueda;
