import { useEffect, useState } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { IZapatilla } from "@/helpers/interfaces";
import { FindAllZapatillasAction } from "@/actions/zapatillas.actions";
import Image from "next/image";
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
  const [zapatillas, setZapatillas] = useState<IZapatilla[]>([]);
  const [openEditar, setOpenEditar] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);
  const [openEliminarZapatilla, setOpenEliminarZapatilla] = useState(false);

  const [zapatillaEditando, setZapatillaEditando] =
    useState<IZapatilla | null>(null);

  const [editData, setEditData] = useState<IZapatilla>({
    nombre: "",
    marca: "",
    color: "",
    genero: "",
    stock: "",
    material: "",
    talle: [],
    fotos: [],
    destacado: false,
    nuevo: false,
    oferta: false,
    precioMayor: "",
    precioMenor: "",
    oldPrecioMayor: "",
    oldPrecioMenor: "",
    description: "",
  });

  const ALL_TALLES = Array.from({ length: 45 - 18 + 1 }, (_, i) =>
    (18 + i).toString()
  );

  useEffect(() => {
    const getZapatillas = async () => {
      const data = await FindAllZapatillasAction();
      if (data) setZapatillas(data);
    };
    getZapatillas();
  }, [editSuccess]);

  const abrirFormularioEdicion = (zapa: IZapatilla) => {
    setZapatillaEditando(zapa);
    setEditData(zapa);
    setOpenEditar(true);
  };

  const handleSubmitEditData = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await EditarZapatillaAction(editData);
    if (!response.success) return alert(`Error: ${response.message}`);
    setEditSuccess(!editSuccess);
    setOpenEditar(false);
    alert("Zapatilla actualizada correctamente");
  };

  const handleDeleteZapatilla = async (id: string) => {
    const response = await deleteZapatillaAction(id);
    if (!response.success) return alert(`Error: ${response.message}`);
    setEditSuccess(!editSuccess);
    setOpenEliminarZapatilla(false);
    setOpenEditar(false);
    alert("Zapatilla eliminada");
  };

  const uploadImageHandle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      `${process.env.NEXT_PUBLIC_UPLOAD_PRESET}`
    );

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
      { method: "POST", body: formData }
    );

    const data = await res.json();
    if (data.secure_url) {
      setEditData((prev) => ({
        ...prev,
        fotos: [...prev.fotos, data.secure_url],
      }));
    }
  };

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  const filteredZapatillas = zapatillas.filter((z) =>
    `${z.nombre} ${z.marca} ${z.color}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredZapatillas.length / ITEMS_PER_PAGE);

  const paginatedZapatillas = filteredZapatillas.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (

    <div className="min-h-screen bg-gray-100 py-10">
      <div className="mx-auto w-full max-w-6xl px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <button
              onClick={toggleActualizarStock}
              className="p-2 rounded-lg border hover:bg-gray-200 transition"
            >
              <RiArrowGoBackFill size={22} />
            </button>

            <h2 className="text-3xl font-extrabold tracking-tight">
              Actualizar stock
            </h2>
          </div>

          <input
            type="text"
            placeholder="Buscar zapatilla..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full md:w-80 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Listado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paginatedZapatillas.map((zap) => (
            <div
              key={zap.id}
              className="bg-white rounded-xl border p-5 hover:shadow-lg transition flex gap-4"
            >
              <Link
                href={`/calzado/${zap.nombre}`}
                target="_blank"
                className="flex gap-4 flex-1"
              >
                <Image
                  src={zap.fotos[0]}
                  alt={zap.nombre}
                  width={96}
                  height={96}
                  className="rounded-lg object-cover"
                />

                <div className="flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-lg">{zap.nombre}</h4>

                    {zap.oferta ? (
                      <div>
                        <div className="flex">
                          <p className="text-[13px] md:text-[17px] font-bold  mr-3">Mayor: </p>
                          <p className="text-[13px] md:text-[17px] text-[#525252] font-bold line-through mr-3">
                            $ {zap.oldPrecioMayor}
                          </p>
                          <p className="text-[13px] md:text-[17px] text-[#056505] font-bold">
                            $ {zap.precioMayor}
                          </p>
                        </div>
                        <div className="flex">
                          <p className="text-[13px] md:text-[17px] font-bold  mr-3">Menor: </p>
                          <p className="text-[13px] md:text-[17px] text-[#525252] font-bold line-through mr-3">
                            $ {zap.oldPrecioMenor}
                          </p>
                          <p className="text-[13px] md:text-[17px] text-[#056505] font-bold">
                            $ {zap.precioMenor}
                          </p>
                        </div>
                      </div>

                    ) : (
                      <>
                        <div className="flex">
                          <p className="text-[13px] md:text-[17px] font-bold  mr-3">Mayor: </p>
                          <p className="text-[13px] md:text-[17px] text-[#056505] font-bold">
                            $ {zap.precioMayor}
                          </p>
                        </div>
                        <div className="flex">
                          <p className="text-[13px] md:text-[17px] font-bold  mr-3">Menor: </p>
                          <p className="text-[13px] md:text-[17px] text-[#056505] font-bold">
                            $ {zap.precioMenor}
                          </p>
                        </div>
                      </>
                    )}
                  </div>

                  <span className="text-sm text-gray-600">
                    Stock: <strong>{zap.stock}</strong>
                  </span>
                </div>
              </Link>

              <div className="flex items-end">
                <button
                  onClick={() => abrirFormularioEdicion(zap)}
                  className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  Editar
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-3 mt-10">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-4 py-2 rounded border disabled:opacity-40"
          >
            Anterior
          </button>

          <span className="font-semibold">
            Página {page} de {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 rounded border disabled:opacity-40"
          >
            Siguiente
          </button>
        </div>

      </div>

      {/* Modal edición */}
      {openEditar && zapatillaEditando && (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center">
          <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Editar zapatilla</h3>
              <button
                onClick={() => setOpenEditar(false)}
                className="text-red-600 font-bold"
              >
                Cerrar
              </button>
            </div>

            <form onSubmit={handleSubmitEditData} className="space-y-4">
              {[
                "nombre",
                "marca",
                "color",
                "genero",
                "stock",
                "material",
              ].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium capitalize">
                    {field}
                  </label>
                  <input
                    type="text"
                    value={editData[field as keyof IZapatilla] as string}
                    onChange={(e) =>
                      setEditData({ ...editData, [field]: e.target.value })
                    }
                    className="w-full border rounded px-3 py-2"
                  />
                </div>
              ))}

              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Oferta", key: "oferta" },
                  { label: "Destacado", key: "destacado" },
                  { label: "Nuevo", key: "nuevo" },
                ].map(({ label, key }) => (
                  <label key={key} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={editData[key as keyof IZapatilla] as boolean}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          [key]: e.target.checked,
                        })
                      }
                    />
                    <span className="font-medium">{label}</span>
                  </label>
                ))}
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-lg">Precios</h4>

                
                {/* PRECIOS VIEJOS SOLO SI ES OFERTA */}
                {editData.oferta && (
                  <>
                    <div>
                      <label className="block font-medium text-gray-600">
                        Precio mayor viejo
                      </label>
                      <input
                        type="text"
                        value={editData.oldPrecioMayor}
                        onChange={(e) =>
                          setEditData({ ...editData, oldPrecioMayor: e.target.value })
                        }
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-gray-600">
                        Precio menor viejo
                      </label>
                      <input
                        type="text"
                        value={editData.oldPrecioMenor}
                        onChange={(e) =>
                          setEditData({ ...editData, oldPrecioMenor: e.target.value })
                        }
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>
                  </>
                )}

                {/* PRECIO MAYOR */}
                <div>
                  <label className={`block font-medium ${editData.oferta ? "text-green-700 font-bold" : ""}`}>
                    {editData.oferta ? "Precio mayor oferta" : "Precio mayor"}
                  </label>
                  <input
                    type="text"
                    value={editData.precioMayor}
                    onChange={(e) =>
                      setEditData({ ...editData, precioMayor: e.target.value })
                    }
                    className="w-full border rounded px-3 py-2"
                  />
                </div>

                {/* PRECIO MENOR */}
                <div>
                  <label className={`block font-medium ${editData.oferta ? "text-green-700 font-bold" : ""}`}>
                    {editData.oferta ? "Precio menor oferta" : "Precio menor"}
                  </label>
                  <input
                    type="text"
                    value={editData.precioMenor}
                    onChange={(e) =>
                      setEditData({ ...editData, precioMenor: e.target.value })
                    }
                    className="w-full border rounded px-3 py-2"
                  />
                </div>

              </div>

              {/* Fotos */}
              <div>
                <label className="font-medium block">Fotos</label>
                <div className="grid grid-cols-3 gap-3 mt-2">
                  {editData.fotos.map((img, i) => (
                    <div key={i} className="relative">
                      <MdCancel
                        size={22}
                        className="absolute top-1 right-1 text-red-600 cursor-pointer"
                        onClick={() =>
                          setEditData({
                            ...editData,
                            fotos: editData.fotos.filter((f) => f !== img),
                          })
                        }
                      />
                      <Image
                        src={img}
                        alt="zapatilla"
                        width={150}
                        height={150}
                        className="rounded object-cover"
                      />
                    </div>
                  ))}
                  <label className="border rounded flex items-center justify-center cursor-pointer">
                    + Subir
                    <input hidden type="file" onChange={uploadImageHandle} />
                  </label>
                </div>
              </div>

              {/* Botones */}
              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setOpenEliminarZapatilla(true)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Eliminar
                </button>
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded"
                >
                  Guardar cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Confirmar eliminación */}
      {openEliminarZapatilla && zapatillaEditando && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl text-center max-w-sm">
            <p className="font-bold mb-4">
              ¿Eliminar "{zapatillaEditando.nombre}"?
            </p>
            <div className="flex gap-3 justify-center">
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                onClick={() => setOpenEliminarZapatilla(false)}
              >
                Cancelar
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded"
                onClick={() =>
                  zapatillaEditando.id &&
                  handleDeleteZapatilla(zapatillaEditando.id)
                }
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActualizarStock;
