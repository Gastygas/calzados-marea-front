import { useEffect, useState } from "react";
import styles from "./ActualizarStock.module.css";
import { RiArrowGoBackFill } from "react-icons/ri";
import { IZapatilla } from "@/helpers/interfaces";
import { FindAllZapatillasAction } from "@/actions/zapatillas.actions";
import Image from "next/image";
import SeleccionarTalle from "../SeleccionarTalle/SeleccionarTalle";
import {
  deleteZapatillaAction,
  EditarZapatillaAction,
} from "@/actions/admin.actions";
import { MdCancel } from "react-icons/md";
import Link from "next/link";

const ActualizarStock = ({
  toggleActualizarStock,
}: {
  toggleActualizarStock: () => void;
}) => {
  const [zapatilla, setZapatillas] = useState<IZapatilla[] | []>([]);
  const [openEditar, setOpenEditar] = useState<boolean>(false);
  const [editSuccess, setEditSucces] = useState<boolean>(false);
  const [stockById, setStockById] = useState<{
    [id: string]: string | undefined;
  }>({});
  const [openEliminarZapatilla, setOpenEliminarZapatilla] =
    useState<boolean>(false);
  const [zapatillaEditando, setZapatillaEditando] = useState<IZapatilla | null>(
    null
  );
  const [editData, setEditData] = useState<IZapatilla>({
    nombre: "",
    id: "",
    precio: "",
    marca: "",
    talle: [],
    color: "",
    material: "",
    destacado: false,
    nuevo: false,
    fotos: [],
    genero: "",
    stock: "",
  });

  // const [selectedTalles, setSelectedTalles] = useState<{
  //   [id: string]: string[];
  // }>({});
  const ALL_TALLES = Array.from({ length: 45 - 32 + 1 }, (_, i) =>
    (32 + i).toString()
  );

  const handleSubmitEditData = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await EditarZapatillaAction(editData);
    if (response.success === false) return alert(`Error: ${response.message}`);
    setEditSucces(!editSuccess);
    setOpenEditar(!openEditar);
    return alert("La zapatilla se edito correctamente");
  };
  useEffect(() => {
    const getZapatillas = async () => {
      const zapatillas: IZapatilla[] | null = await FindAllZapatillasAction();

      if (zapatillas !== null) {
        setZapatillas(zapatillas);

        // Inicializar el estado del input con el stock actual
        const initialStocks: { [id: string]: string | undefined } = {};
        zapatillas.forEach((zap: IZapatilla) => {
          initialStocks[zap.id] = zap.stock;
        });
        setStockById(initialStocks);
      }
    };
    getZapatillas();
  }, [editSuccess]);

  const handleDeletePhoto = async (id: string) => {
    const response = await deleteZapatillaAction(id);
    if (response.success === false) return alert(`Error: ${response.message}`);
    setEditSucces(!editSuccess);
    setOpenEditar(!openEditar);
    return alert("La zapatilla se elimino correctamente");
  };

  const abrirFormularioEdicion = (zapa: IZapatilla) => {
    setZapatillaEditando(zapa);
    setEditData(zapa); // copiamos los datos iniciales al estado de edición
    setOpenEditar(true);
  };

  const uploadImageHandle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      `${process.env.NEXT_PUBLIC_UPLOAD_PRESET}`
    ); // <-- cambia esto por tu upload preset
    // formData.append('folder', 'zapatillas'); // Opcional: carpeta en Cloudinary

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.secure_url) {
        setEditData((prev) => ({
          ...prev,
          fotos: [...(prev.fotos || []), data.secure_url],
        }));
      } else {
        console.error("Error al subir imagen a Cloudinary:", data);
        alert("Error subiendo imagen");
      }
    } catch (error) {
      console.error("Error en upload:", error);
      alert("Error subiendo imagen");
    }
  };

  return (
    <div>
      <button onClick={toggleActualizarStock}>
        <RiArrowGoBackFill size={30} />
      </button>
      <h3 className="">Actualizar stock</h3>
      <div>
        {zapatilla.map((zap) => (
          <div
            key={zap.id}
            className={`${styles.flexZapasDiv} hover:bg-gray-400 transform duration-100 ease-in-out
          
          `}
          >
            <div className={styles.zapaInfoContainer}>
              <Link
                href={`/calzado/${zap.nombre}`}
                target="blank"
                className="flex items-center"
              >
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
                </div>
              </Link>
            </div>
            <div className={`${styles.cambiarStock} flex items-center`}>
              <button
                className="bg-gray-800 p-1 border rounded-lg mr-5 text-white"
                onClick={() => abrirFormularioEdicion(zap)}
              >
                Editar
              </button>
              <h4 className="text-lg mr-4">Stock:</h4>
              <p className="text-lg text-center mr-4">
                {stockById[zap.id] || ""}
              </p>
            </div>
          </div>
        ))}
      </div>
      {openEditar && zapatillaEditando && (
        <div className={`${styles.selecTalleDiv} p-5 z-10`}>
          <div className="flex justify-between">
            <h4 className="uppercase">Editar zapatilla</h4>
            <button onClick={() => setOpenEditar(false)}>Cerrar</button>
          </div>

          <form onSubmit={handleSubmitEditData} className="grid gap-4 mt-4">
            <div className="flex items-center">
              <label htmlFor="">Nombre:</label>
              <input
                type="text"
                value={editData.nombre}
                onChange={(e) =>
                  setEditData({ ...editData, nombre: e.target.value })
                }
                name="nombre"
                id="nombre"
                placeholder="Nombre"
                className="border p-1 rounded border-black ml-3 w-fit"
              />
            </div>
            <div>
              <label htmlFor="">Precio: $</label>
              <input
                type="text"
                value={`${editData.precio}`}
                onChange={(e) =>
                  setEditData({ ...editData, precio: e.target.value })
                }
                placeholder="Precio"
                className="border p-1 rounded border-black ml-1 w-fit"
                name="precio"
                id="precio"
              />
            </div>
            <div>
              <label htmlFor="">Marca:</label>
              <input
                type="text"
                value={editData.marca}
                onChange={(e) =>
                  setEditData({ ...editData, marca: e.target.value })
                }
                placeholder="Marca"
                id="marca"
                name="marca"
                className="border p-1 rounded border-black ml-3 w-fit"
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="">Color:</label>
              <input
                type="text"
                value={editData.color}
                name="color"
                id="color"
                onChange={(e) =>
                  setEditData({ ...editData, color: e.target.value })
                }
                placeholder="Color"
                className="border p-1 rounded border-black ml-3 w-fit"
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="">Género:</label>
              <input
                type="text"
                value={editData.genero}
                onChange={(e) =>
                  setEditData({ ...editData, genero: e.target.value })
                }
                placeholder="Género"
                className="border p-1 rounded border-black ml-3 w-fit"
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="">Stock:</label>
              <input
                type="text"
                value={editData.stock}
                onChange={(e) =>
                  setEditData({ ...editData, stock: e.target.value })
                }
                name="stock"
                id="stock"
                placeholder="Stock"
                className="border p-1 rounded border-black ml-3 w-fit"
              />
            </div>
            <div>
              <label htmlFor="">Material:</label>
              <input
                type="text"
                value={editData.material}
                onChange={(e) =>
                  setEditData({ ...editData, material: e.target.value })
                }
                name="material"
                id="material"
                placeholder="material"
                className="border p-1 rounded border-black ml-3 w-fit"
              />
            </div>
            <div>
              <label htmlFor="talle">Talle:</label>
              <div id="talle" className="grid grid-cols-4 w-1/2">
                {ALL_TALLES.map((num, i) => (
                  <div key={i} className={`p-1 flex `}>
                    <p
                      className={`p-6 rounded-md cursor-pointer text-xl font-bold border hover:scale-95 transform duration-100 ${
                        zapatillaEditando.talle.includes(num)
                          ? "text-white  bg-black"
                          : "text-black  bg-white border-black hover:text-white hover:bg-black  "
                      } `}
                      onClick={() => {
                        let nuevosTalles: string[] = [];

                        if (zapatillaEditando.talle.includes(num)) {
                          nuevosTalles = zapatillaEditando.talle.filter(
                            (t) => t !== num
                          );
                        } else {
                          nuevosTalles = [...zapatillaEditando.talle, num];
                        }

                        setZapatillaEditando({
                          ...zapatillaEditando,
                          talle: nuevosTalles,
                        });

                        setEditData({ ...editData, talle: nuevosTalles });
                      }}
                    >
                      {num}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label>Fotos:</label>
              <div className="flex justify-around w-fit">
                {editData.fotos.map((img: string, i) => (
                  <div key={i}>
                    <MdCancel
                      className="absolute hover:size-7 cursor-pointer"
                      size={24}
                      color="red"
                      onClick={(e) => {
                        const nuevasFotos =
                          editData.fotos?.filter((foto) => foto !== img) || [];
                        setEditData({ ...editData, fotos: nuevasFotos });
                      }}
                    />
                    <Image
                      className="w-40"
                      src={img}
                      alt="imagen de zapatilla"
                      width={1000}
                      height={100}
                    />
                  </div>
                ))}
                <div className="flex items-center p-5 border border-gray-600 justify-cente rounded-3xl bg-green-300">
                  <label
                    className="cursor-pointer text-lg text-center text-black hover:text-gray-500 transform duration-75"
                    htmlFor="addPhoto"
                  >
                    Subir Imagen
                  </label>
                  <input
                    type="file"
                    name="addPhoto"
                    id="addPhoto"
                    hidden
                    onChange={uploadImageHandle}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-around">
              <button
                className="bg-red-600 text-white p-2 rounded mt-2"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenEliminarZapatilla(true);
                }}
              >
                Eliminar
              </button>
              <button
                onClick={() => setOpenEditar(!openEditar)}
                className="bg-green-600 text-white p-2 rounded mt-2"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded mt-2"
              >
                Guardar cambios
              </button>
              {openEliminarZapatilla && zapatillaEditando && (
                <div className="flex flex-col p-10 absolute top-[25vh]  border rounded-2xl bg-red-300 border-black items-center">
                  <p className="text-xl font-bold">
                    ¿Estas seguro de eliminar "
                    {
                      <span className="text-blue-950 italic">
                        {zapatillaEditando.nombre}
                      </span>
                    }
                    " ?
                  </p>
                  <Image
                    className="w-20 rounded-xl mt-5"
                    src={zapatillaEditando.fotos[0]}
                    alt="imagen de zapatilla"
                    width={1000}
                    height={100}
                  />
                  <div className=" flex w-full p-10 ">
                    <button
                      className="border bg-green-500 rounded-lg p-5 font-bold w-1/2 mr-10"
                      onClick={() =>
                        setOpenEliminarZapatilla(!openEliminarZapatilla)
                      }
                    >
                      No, Volver atras
                    </button>
                    <button
                      className="border bg-red-500 rounded-lg p-5 font-bold  w-1/2"
                      onClick={() => handleDeletePhoto(zapatillaEditando.id)}
                    >
                      Si, Eliminar
                    </button>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ActualizarStock;
