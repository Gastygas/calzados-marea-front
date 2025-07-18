"use client";
import { LogoCM } from "@/utils/LogoCM";
import styles from "./ShoppingCart.module.css";
import { AuthContext } from "@/utils/authContext";
import { useContext } from "react";
import { IZapatilla } from "@/helpers/interfaces";
import Image from "next/image";
import BarraDeBusquedaMasBuscados from "../BarraDeBusquedaMasBuscados/BarraDeBusquedaMasBuscados";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import WhatsappForm from "../WhatsappForm/WhatsappForm";

const ShoppingCart = ({
  toggleShopping,
  toggleEnviarWhatsappForm,
  isOpenEnviarWhatsapp,
  isOpenShopping,
}: {
  isOpenEnviarWhatsapp: boolean;
  isOpenShopping: boolean;
  toggleShopping: () => void;
  toggleEnviarWhatsappForm: () => void;
}) => {
  const shoppingContext = useContext(AuthContext);
  if (!shoppingContext) return null;
  const { shoppingCart, removeFromCart } = shoppingContext;

  return (
    <div className={styles.shoppingContainer}>
      <div className={styles.shoppingNav}>
        <div className=" bg-black text-white text-center font-medium">
          <h4>Revisa tu orden🛒</h4>
        </div>
        <div className={styles.navShoppingDiv}>
          <LogoCM />
          <button onClick={toggleShopping} className={styles.cerrarButton}>
            Cerrar
          </button>
        </div>
        <div className={styles.miCompraDiv}>
          <h4>Mi Compra</h4>
        </div>
      </div>
      <div className="overflow-y-scroll h-full ">
        {shoppingCart.length ? (
          <div className="flex flex-col justify-between h-full">
            <div className={styles.contenidoDiv}>
              {shoppingCart.map((zap: IZapatilla) => (
                <div key={zap.id} className={styles.flexZapasDiv}>
                  <div className={styles.zapaInfoContainer}>
                    <div className={styles.zapaImagenDiv}>
                      <Image
                        src={zap.fotos[0]}
                        alt={`${zap.nombre} imagen`}
                        width={1000}
                        height={1000}
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.infoZapaDiv}>
                      <h4>{zap.nombre}</h4>
                      <p>${zap.precio}</p>
                      <h4>Talles:{" "}{zap.talle.map((t, k) => {
                        return k == 0 ? t : ", " + t
                      })}</h4>
                    </div>
                  </div>
                  <div className={styles.eliminarDiv}>
                    <button onClick={() => removeFromCart(`${zap.id ? zap.id : ""}`)}>
                      eliminar
                    </button>
                  </div>
                </div>
              ))}
              <WhatsappForm isOpenEnviarWhatsapp={isOpenEnviarWhatsapp} toggleEnviarWhatsappForm={toggleEnviarWhatsappForm} zapatillas={shoppingCart.map((zap: IZapatilla) => zap)} talles={shoppingCart.flatMap((zap: IZapatilla) => zap.talle)} />
            </div>
            <div className={styles.shoppingButtonDiv}>
              <button onClick={toggleEnviarWhatsappForm}>
                Enviar a WhatsApp
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.carritoVacioDiv}>
            <MdOutlineRemoveShoppingCart size={60} />
            <h4 className=" font-semibold mt-4">Tu carrito esta vacío</h4>
            <BarraDeBusquedaMasBuscados toggleShopping={toggleShopping} isOpenShopping={isOpenShopping} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
