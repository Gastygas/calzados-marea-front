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
  const ALL_TALLES = Array.from({ length: 45 - 18 + 1 }, (_, i) =>
    (18 + i).toString()
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
          zap.id ? (initialStocks[zap.id] = zap.stock) : "";
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
    <div className="min-h-screen flex flex-col">
      <button onClick={toggleActualizarStock}>
        <RiArrowGoBackFill size={30} />
      </button>
      <h3>Actualizar stock</h3>
      <div className="flex-grow">
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
                {zap.id ? stockById[zap.id] : ""}
              </p>
            </div>
          </div>
        ))}
      </div>
      {openEditar && zapatillaEditando && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 flex items-center justify-center">
          <div
            className={`${styles.selecTalleDiv} p-5 z-10 max-w-full overflow-y-auto rounded-xl`}
          >
            <div className="flex justify-between items-center mb-4">
              <h4 className="uppercase text-lg font-semibold">
                Editar zapatilla
              </h4>
              <button
                onClick={() => setOpenEditar(false)}
                className="text-red-600 font-bold"
              >
                Cerrar
              </button>
            </div>

            <form
              onSubmit={handleSubmitEditData}
              className="flex flex-col gap-4"
            >
              {/* Campos de texto */}
              {[
                { label: "Nombre", key: "nombre" },
                { label: "Precio", key: "precio" },
                { label: "Marca", key: "marca" },
                { label: "Color", key: "color" },
                { label: "Género", key: "genero" },
                { label: "Stock", key: "stock" },
                { label: "Material", key: "material" },
              ].map(({ label, key }) => (
                <div
                  key={key}
                  className="flex flex-col sm:flex-row items-start sm:items-center"
                >
                  <label htmlFor={key} className="min-w-[80px] font-medium">
                    {label}:
                  </label>
                  <input
                    type="text"
                    id={key}
                    name={key}
                    value={editData[key as keyof IZapatilla] as string}
                    onChange={(e) =>
                      setEditData({ ...editData, [key]: e.target.value })
                    }
                    placeholder={label}
                    className="border p-2 rounded border-black w-full sm:w-auto sm:ml-3"
                  />
                </div>
              ))}

              {/* Talles */}
              <div>
                <label htmlFor="talle" className="font-medium">
                  Talle:
                </label>
                <div
                  id="talle"
                  className="grid grid-cols-4 sm:grid-cols-6 gap-2 mt-2"
                >
                  {ALL_TALLES.map((num, i) => (
                    <div key={i}>
                      <p
                        className={`rounded-md cursor-pointer text-sm text-center font-bold border transition transform duration-100 p-2 ${
                          zapatillaEditando.talle.includes(num)
                            ? "text-white bg-black"
                            : "text-black bg-white border-black hover:bg-black hover:text-white"
                        }`}
                        onClick={() => {
                          let nuevosTalles = zapatillaEditando.talle.includes(
                            num
                          )
                            ? zapatillaEditando.talle.filter((t) => t !== num)
                            : [...zapatillaEditando.talle, num];
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

              {/* Fotos */}
              <div>
                <label className="font-medium">Fotos:</label>
                <p className="text-sm text-gray-600">Máximo 5</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
                  {editData.fotos.map((img: string, i) => (
                    <div key={i} className="relative">
                      <MdCancel
                        className="absolute top-0 right-0 hover:size-7 cursor-pointer z-10"
                        size={24}
                        color="red"
                        onClick={() => {
                          const nuevasFotos = editData.fotos.filter(
                            (foto) => foto !== img
                          );
                          setEditData({ ...editData, fotos: nuevasFotos });
                        }}
                      />
                      <Image
                        className="w-full h-32 object-cover rounded"
                        src={img}
                        alt="imagen de zapatilla"
                        width={500}
                        height={100}
                      />
                    </div>
                  ))}
                  <div className="flex items-center justify-center rounded-xl p-4">
                    <label
                      className="cursor-pointer text-lg text-center text-blue-700 underline hover:text-gray-500 transform duration-75"
                      htmlFor="addPhoto"
                    >
                      Subir <br />
                      Foto
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

              {/* Botones */}
              <div className="flex flex-col sm:flex-row gap-3 justify-around">
                <button
                  className="bg-red-600 text-white p-2 rounded"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenEliminarZapatilla(true);
                  }}
                >
                  Eliminar
                </button>
                <button
                  onClick={() => setOpenEditar(!openEditar)}
                  className="bg-yellow-600 text-white p-2 rounded"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white p-2 rounded"
                >
                  Guardar cambios
                </button>
              </div>

              {/* Confirmación de eliminación */}
              {openEliminarZapatilla && zapatillaEditando && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center z-50">
                  <div className="bg-red-300 p-6 rounded-xl w-[90%] max-w-md text-center">
                    <p className="text-lg font-bold mb-4">
                      ¿Estás seguro de eliminar "
                      <span className="italic text-blue-950">
                        {zapatillaEditando.nombre}
                      </span>
                      "?
                    </p>
                    <Image
                      className="w-20 rounded-xl mx-auto mb-4"
                      src={zapatillaEditando.fotos[0]}
                      alt="imagen de zapatilla"
                      width={1000}
                      height={100}
                    />
                    <div className="flex flex-col gap-2">
                      <button
                        className="bg-green-500 text-white p-2 rounded font-bold"
                        onClick={() => setOpenEliminarZapatilla(false)}
                      >
                        No, volver atrás
                      </button>
                      <button
                        className="bg-red-500 text-white p-2 rounded font-bold"
                        onClick={() => {
                          if (zapatillaEditando.id)
                            handleDeletePhoto(zapatillaEditando.id);
                        }}
                      >
                        Sí, eliminar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActualizarStock;
