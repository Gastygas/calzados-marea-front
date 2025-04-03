"use client";
import { FormEvent, useState } from "react";
import styles from "./AdminView.module.css";
import { ILoginData } from "@/helpers/interfaces";
import { useAuth } from "@/utils/authContext";

const AdminView = () => {
  const initialData:ILoginData = { user: "", password: "" };
  const initialDirty = { user: false, password: false };
  const [data, setData] = useState<ILoginData>(initialData);
  const [dirty, setDirty] = useState(initialDirty);
  const { logIn } = useAuth();

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
      } catch (error:any) {
        alert(`Leer: ${error.message === "missing email or phone" ? "email o contraseña incorrecto" : ""} `);
      }
    // const login = await LogInAction(data)
    // if(login.success === true){
    // alert("inicio de sesion exitoso");

    // }
    // else{
    //     alert(`Leer: ${login.message === "missing email or phone" ? "email o password incorrecto" : ""} `)
    //     return
    // }
    
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
              type="text"
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
