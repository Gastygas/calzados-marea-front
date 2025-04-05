"use client";
import { FormEvent, useState } from "react";
import styles from "./AdminView.module.css";
import { ILoginData } from "@/helpers/interfaces";
import { useAuth } from "@/utils/authContext";
import { useRouter } from "next/navigation";

const AdminView = () => {
  const initialData:ILoginData = { user: "", password: "" };
  const initialDirty = { user: false, password: false };
  const [data, setData] = useState<ILoginData>(initialData);
  const [dirty, setDirty] = useState(initialDirty);
  const { logIn } = useAuth();

  const router = useRouter()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setDirty({ ...dirty, [e.target.name]: true });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        await logIn(data);
        alert("Inicio de sesión exitoso");
        router.push("admin/dashboard")
      } catch (e:unknown) {
        alert(`Leer: email o contraseña incorrecto`);
      }
  };

  return (
    <div className={styles.containerView}>
      <div className={styles.divView}>
        <div className={styles.headerDiv}>
          <h4>Inicia Sesion</h4>
        </div>
        <form className={styles.formAdmin} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">user</label>
            <input
              type="text"
              name="user"
              id="user"
              value={data.user}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button>Ingresar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminView;
