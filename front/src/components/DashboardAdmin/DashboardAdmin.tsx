"use client";
import { useEffect, useState } from "react";
import styles from "./DashboardAdmin.module.css";
import ActualizarStock from "../ActualizarStock/ActualizarStock";
import RenovarStock from "../RenovarStock/RenovarStock";
import { useAuth } from "@/utils/authContext";
import { useRouter } from "next/navigation";
import Loading from "@/helpers/loading";

const DashboardAdmin = () => {
  const {user, loading} = useAuth()
  const router = useRouter();
  const [actualizarStock, setActualizarStock] = useState<boolean>(false);
  const [renovarStock, setRenovarStock] = useState<boolean>(false);

  useEffect(() => {
    if (!loading && !user) {      
      router.push("/")
    }
  }, [user, loading, router]);
  const toggleActualizarStock = () => {
    setActualizarStock(!actualizarStock);
  };

  const toggleRenovarStock = () => {
    setRenovarStock(!renovarStock);
  };
  if(loading || user === null) {return (<Loading/>) }
  return (
    <div className={styles.containerDashboard}>
      {actualizarStock ? (
        <ActualizarStock toggleActualizarStock={toggleActualizarStock} />
      ) : (
        ""
      )}
      {renovarStock ? (
        <RenovarStock toggleRenovarStock={toggleRenovarStock} />
      ) : (
        ""
      )}
      {actualizarStock || renovarStock ? (
        ""
      ) : (
        <div className={styles.divFlex}>
          <div className={styles.headerDiv}>
            <h4>Bienvenido Admin</h4>
            <p>Que hacemos hoy?</p>
          </div>
          <div className={styles.divMain}>
            <div>
              <button onClick={toggleActualizarStock}>actualizar stock</button>
            </div>
            <div>
              <button onClick={toggleRenovarStock}>renovar stock</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardAdmin;
