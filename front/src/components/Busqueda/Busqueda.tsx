import ResultadoBusqueda from "../ResultadoBusqueda/ResultadoBusqueda";
import styles from "./Busqueda.module.css";
import jordan from "../../../assets/jordan.jpg";
import nike from "../../../assets/air force white.jpg";
import dou from "../../../assets/taylor-smith-aDZ5YIuedQg-unsplash.jpg";
const Busqueda = () => {
  const productos = [
    {
      imagen: jordan,
      id: 13,
      nombre: "air force 1 white pink",
    },
    {
      imagen: jordan,
      id: 21231,
      nombre: "air force 1 white pink",
    },
    {
      imagen: dou,
      id: 3123424,
      nombre: "air force 1 white pink",
    },
    {
      imagen: jordan,
      id: 13213123,
      nombre: "air force 1 white pink",
    },
    {
      imagen: jordan,
      id: 2123112312132,
      nombre: "air force 1 white pink",
    },
    {
      imagen: dou,
      id: 3123424123123,
      nombre: "air force 1 white pink",
    },
    {
      imagen: jordan,
      id: 212311231213212321,
      nombre: "air force 1 white pink",
    },
    {
      imagen: dou,
      id: 312342412312333,
      nombre: "air force 1 white pink",
    },
  ];

  return (
    <div>
      <div>
        <h3>Resultados de "Jordan Low"</h3>
      </div>
      <ResultadoBusqueda productos={productos} />
    </div>
  );
};

export default Busqueda;
