import { RiArrowGoBackFill } from "react-icons/ri";
import Image from "next/image";
import { MdCancel } from "react-icons/md";
import { IZapatilla } from "@/helpers/interfaces";
import { useState } from "react";
import { SubirZapatillaAction } from "@/actions/admin.actions";

const SubirStock = ({ toggleSubirStock }: { toggleSubirStock: () => void }) => {
  const initialData: IZapatilla = {
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
    oferta: false,
    description: "",
    oldPrice: "",
  };
  const [editData, setEditData] = useState<IZapatilla>(initialData);

  const handleSubmitEditData = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await SubirZapatillaAction(editData);
    if (response.success === false) {
      return alert(`Error: ${response.message}`);
    } else {
      setEditData(initialData);
      return alert("La zapatilla se subiocorrectamente");
    }
  };

  const ALL_TALLES = Array.from({ length: 45 - 32 + 1 }, (_, i) =>
    (32 + i).toString()
  );

  const uploadImageHandle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("hola", e.target.files?.[0]);

    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      `${process.env.NEXT_PUBLIC_UPLOAD_PRESET}`
    );

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
    <div className="relative">
      <button onClick={toggleSubirStock}>
        <RiArrowGoBackFill size={30} />
      </button>
      <div className="min-h-screen flex flex-col items-center pb-10">
        <h3 className="text-2xl font-bold">Subir stock</h3>
        <form
          onSubmit={handleSubmitEditData}
          className="h-fit w-fit flex flex-col mt-4 p-10 border border-black rounded-xl "
        >
          <div className="flex items-center mb-4 ">
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

          <div className="flex items-center mb-4">
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
          <div className="flex items-center mb-4">
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
          <div className="flex items-center mb-4">
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
          <div className="flex items-center mb-4">
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
          <div className="flex items-center mb-4">
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
          <div className="flex items-center mb-4">
            <label htmlFor="">
              {editData.oferta ? "Precio Viejo" : "Precio"}: $
            </label>
            <input
              type="text"
              value={`${
                editData.oferta && editData.oldPrice
                  ? editData.oldPrice
                  : editData.precio
              }`}
              onChange={(e) => {
                if (editData.oferta) {
                  setEditData({ ...editData, oldPrice: e.target.value });
                } else setEditData({ ...editData, precio: e.target.value });
              }}
              placeholder="Precio"
              className={`border p-1 rounded  ml-1 w-fit ${
                editData.oferta ? "border-gray-500" : "border-black"
              }`}
              name="precio"
              id="precio"
            />
          </div>
          {editData.oferta && (
            <div className="flex items-center mb-4">
              <label htmlFor="">Precio Oferta: $</label>
              <input
                type="text"
                value={`${editData.precio}`}
                onChange={(e) =>
                  setEditData({ ...editData, precio: e.target.value })
                }
                placeholder="Precio Oferta"
                className="border p-1 rounded border-green-800 ml-1 w-fit"
                name="precio"
                id="precio"
              />
            </div>
          )}
          <div className="flex items-center justify-around mb-4">
            <div className="flex items-center">
              <label htmlFor="oferta">Oferta:</label>
              <input
                type="checkbox"
                id="oferta"
                checked={editData.oferta}
                onChange={(e) =>
                  setEditData({ ...editData, oferta: e.target.checked })
                }
                className="border p-1 rounded border-black ml-3 w-fit"
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="nuevo">Nuevo:</label>
              <input
                type="checkbox"
                id="nuevo"
                checked={editData.nuevo}
                onChange={(e) =>
                  setEditData({ ...editData, nuevo: e.target.checked })
                }
                className="border p-1 rounded border-black ml-3 w-fit"
              />
            </div>

            <div className="flex items-center">
              <label htmlFor="destacado">Destacado:</label>
              <input
                type="checkbox"
                id="destacado"
                checked={editData.destacado}
                onChange={(e) =>
                  setEditData({ ...editData, destacado: e.target.checked })
                }
                className="border p-1 rounded border-black ml-3 w-fit"
              />
            </div>
          </div>
          <div className="flex flex-col  mb-4">
            <label htmlFor="description">Descripción:</label>
            <textarea
              value={editData.description}
              onChange={(e) =>
                setEditData({ ...editData, description: e.target.value })
              }
              placeholder="Describe tu zapatilla"
              className={`border p-1 rounded  ml-1 w-fit border-black`}
              name="description"
              id="description"
              cols={35}
              rows={6}
            ></textarea>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="talle">Talle:</label>
            <div id="talle" className="grid grid-cols-4 mt-4">
              {ALL_TALLES.map((num, i) => (
                <div key={i} className={`p-1 flex `}>
                  <p
                    className={`p-6 rounded-md cursor-pointer text-xl font-bold border hover:scale-95 transform duration-100 ${
                      editData.talle.includes(num)
                        ? "text-white  bg-black"
                        : "text-black  bg-white border-black hover:text-white hover:bg-black  "
                    } `}
                    onClick={() => {
                      let nuevosTalles: string[] = [];

                      if (editData.talle.includes(num)) {
                        nuevosTalles = editData.talle.filter((t) => t !== num);
                      } else {
                        nuevosTalles = [...editData.talle, num];
                      }

                      setEditData({
                        ...editData,
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
          <div className="flex flex-col mb-4">
            <label>Fotos:</label>
            <p className="font-medium text-gray-800">Máximo 5</p>
            <div className="flex flex-col md:grid md:grid-cols-3 md:gap-5 w-full mt-4">
              {editData.fotos.map((img: string, i) => (
                <div key={i}>
                  <MdCancel
                    className="absolute hover:size-7 cursor-pointer"
                    size={24}
                    color="red"
                    onClick={() => {
                      const nuevasFotos =
                        editData.fotos?.filter((foto) => foto !== img) || [];
                      setEditData({ ...editData, fotos: nuevasFotos });
                    }}
                  />
                  <Image
                    className="w-32 h-32"
                    src={img}
                    alt="imagen de zapatilla"
                    width={1000}
                    height={100}
                  />
                </div>
              ))}
              <div className="flex items-center p-4 rounded-3xl ">
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
          <div className="flex justify-around w-full">
            <button
              type="submit"
              className={`text-lg font-semibold text-white p-2 rounded mt-2 w-1/2 duration-75 ${
                !editData.color ||
                !editData.fotos ||
                !editData.genero ||
                !editData.marca ||
                !editData.material ||
                !editData.nombre ||
                !editData.precio ||
                !editData.stock ||
                !editData.talle
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-500  hover:bg-blue-700"
              }  `}
              disabled={
                !editData.color ||
                !editData.fotos ||
                !editData.genero ||
                !editData.marca ||
                !editData.material ||
                !editData.nombre ||
                !editData.precio ||
                !editData.stock ||
                !editData.talle
              }
            >
              Subir Zapatilla
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubirStock;
