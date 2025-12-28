"use client";
import { useEffect, useState } from "react";
import styles from "./DashboardAdmin.module.css";
import ActualizarStock from "../ActualizarStock/ActualizarStock";
import SubirStock from "../SubirStock/SubirStock";
import { useAuth } from "@/utils/authContext";
import { useRouter } from "next/navigation";
import Loading from "@/helpers/loading";

const DashboardAdmin = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  const [actualizarStock, setActualizarStock] = useState(false);
  const [subirStock, setSubirStock] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading || user === null) return <Loading />;

  return (
    <div className={styles.containerDashboard}>
      {actualizarStock && (
        <ActualizarStock toggleActualizarStock={() => setActualizarStock(false)} />
      )}

      {subirStock && (
        <SubirStock toggleSubirStock={() => setSubirStock(false)} />
      )}

      {!actualizarStock && !subirStock && (
        <div className={styles.dashboardCard}>
          <header className={styles.header}>
            <h2>Panel de Administración</h2>
            <p>Seleccioná una acción para continuar</p>
          </header>

          <section className={styles.actionsGrid}>
            <button
              className={styles.actionCard}
              onClick={() => setActualizarStock(true)}
            >
              <h3>Actualizar stock</h3>
              <p>Modificar cantidades de productos existentes</p>
            </button>

            <button
              className={styles.actionCard}
              onClick={() => setSubirStock(true)}
            >
              <h3>Subir stock</h3>
              <p>Agregar nuevos productos al catálogo</p>
            </button>
          </section>
        </div>
      )}
    </div>
  );
};

export default DashboardAdmin;

