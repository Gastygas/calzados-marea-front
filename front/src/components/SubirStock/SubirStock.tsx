import { RiArrowGoBackFill } from "react-icons/ri";
import Image from "next/image";
import { MdCancel } from "react-icons/md";
import { IZapatilla } from "@/helpers/interfaces";
import { useEffect, useState } from "react";
import { SubirZapatillaAction } from "@/actions/admin.actions";
import { TALLES_KIDS, TALLES_NUMERICOS, TALLES_ROPA } from "@/helpers/talles";

const GENEROS = [
  { value: "hombre", label: "Hombre" },
  { value: "mujer", label: "Mujer" },
  { value: "unisex", label: "Unisex" },
  { value: "niño", label: "Niño" },
  { value: "niña", label: "Niña" },
];

const TIPOS = [
  { value: "zapatillas", label: "Zapatillas" },
  { value: "botas", label: "Botas" },
  { value: "sandalias", label: "Sandalias" },
  { value: "botines", label: "Botines" },
  { value: "ojotas", label: "Ojotas" },
  { value: "otros", label: "Otros" },
  { value: "ropa", label: "Ropa" },
];

const SubirStock = ({ toggleSubirStock }: { toggleSubirStock: () => void }) => {
  const initialData: IZapatilla = {
    nombre: "",
    precioMayor: "",
    precioMenor: "",
    oldPrecioMayor: "",
    oldPrecioMenor: "",
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
    tipo: "",
  };

  const [editData, setEditData] = useState<IZapatilla>(initialData);

  useEffect(() => {
    setEditData((prev) => ({
      ...prev,
      talle: [],
    }));
  }, [editData.tipo]);

  const handleSubmitEditData = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await SubirZapatillaAction(editData);
    if (response.success === false) {
      alert(`Error: ${response.message}`);
    } else {
      setEditData(initialData);
      alert("La zapatilla se subió correctamente");
    }
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

    try {
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
      } else {
        alert("Error subiendo imagen");
      }
    } catch {
      alert("Error subiendo imagen");
    }
  };

  const disabled =
    !editData.color ||
    !editData.fotos.length ||
    !editData.genero ||
    !editData.marca ||
    !editData.material ||
    !editData.nombre ||
    !editData.precioMayor ||
    !editData.precioMenor ||
    !editData.stock;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={toggleSubirStock}
          className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-black mb-6"
        >
          <RiArrowGoBackFill size={18} />
          Volver al dashboard
        </button>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-8">Subir nuevo producto</h3>

          <form onSubmit={handleSubmitEditData} className="space-y-10">
            {/* INFO BASICA */}
            <section>
              <h4 className="font-semibold text-lg mb-4">Información básica</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Nombre" value={editData.nombre} onChange={(v: string) => setEditData({ ...editData, nombre: v })} />
                <Input label="Marca" value={editData.marca} onChange={(v: string) => setEditData({ ...editData, marca: v })} />
                <Input label="Color" value={editData.color} onChange={(v: string) => setEditData({ ...editData, color: v })} />
                <Input label="Material" value={editData.material} onChange={(v: string) => setEditData({ ...editData, material: v })} />
              </div>
            </section>

            {/* CLASIFICACION */}
            <section>
              <h4 className="font-semibold text-lg mb-4">Clasificación</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <Select label="Género" value={editData.genero} options={GENEROS} onChange={(v: string) => setEditData({ ...editData, genero: v })} />
                <Select label="Tipo" value={editData.tipo} options={TIPOS} onChange={(v: string) => setEditData({ ...editData, tipo: v })} />
                <Input label="Stock" value={editData.stock} onChange={(v: string) => setEditData({ ...editData, stock: v })} />
              </div>
            </section>

            {/* PRECIOS */}
            <section>
              <h4 className="font-semibold text-lg mb-4">Precios</h4>

              {/* PRECIOS VIEJOS SOLO SI ES OFERTA */}
              {editData.oferta && (
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <Input
                    label="Precio mayor viejo"
                    value={editData.oldPrecioMayor}
                    onChange={(v: string) =>
                      setEditData({ ...editData, oldPrecioMayor: v })
                    }
                  />

                  <Input
                    label="Precio menor viejo"
                    value={editData.oldPrecioMenor}
                    onChange={(v: string) =>
                      setEditData({ ...editData, oldPrecioMenor: v })
                    }
                  />
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                {/* PRECIO MAYOR */}
                <Input
                  label={editData.oferta ? "Precio mayor oferta" : "Precio mayor"}
                  value={editData.precioMayor}
                  onChange={(v: string) =>
                    setEditData({ ...editData, precioMayor: v })
                  }
                />

                {/* PRECIO MENOR */}
                <Input
                  label={editData.oferta ? "Precio menor oferta" : "Precio menor"}
                  value={editData.precioMenor}
                  onChange={(v: string) =>
                    setEditData({ ...editData, precioMenor: v })
                  }
                />
              </div>


              {/* CHECKBOX */}
              <div className="flex gap-6 mt-6">
                <Checkbox
                  label="Oferta"
                  checked={editData.oferta}
                  onChange={(v: boolean) =>
                    setEditData({
                      ...editData,
                      oferta: v,
                      ...(v === false && {
                        oldPrecioMayor: "",
                        oldPrecioMenor: "",
                      }),
                    })
                  }
                />

                <Checkbox
                  label="Nuevo"
                  checked={editData.nuevo}
                  onChange={(v: boolean) =>
                    setEditData({ ...editData, nuevo: v })
                  }
                />

                <Checkbox
                  label="Destacado"
                  checked={editData.destacado}
                  onChange={(v: boolean) =>
                    setEditData({ ...editData, destacado: v })
                  }
                />
              </div>
            </section>
            {/* TALLES */}
            {editData.tipo != 'otros' &&
              <section>
                <h4 className="font-semibold text-lg mb-4">Talles</h4>
                <div className="grid grid-cols-6 md:grid-cols-10 gap-3">
                  {(editData.tipo === "ropa"
                    ? TALLES_ROPA
                    : editData.genero == 'hombre' || editData.genero == 'mujer' || editData.genero == 'unisex' ? TALLES_NUMERICOS : TALLES_KIDS
                  ).map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => {
                        const nuevos = editData.talle.includes(num)
                          ? editData.talle.filter((t) => t !== num)
                          : [...editData.talle, num];

                        setEditData({ ...editData, talle: nuevos });
                      }}
                      className={`py-2 rounded-md border text-sm font-semibold transition ${editData.talle.includes(num)
                        ? "bg-black text-white"
                        : "bg-white hover:bg-black hover:text-white"
                        }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </section>}

            {/* DESCRIPCION */}
            <section>
              <h4 className="font-semibold text-lg mb-4">Descripción</h4>
              <textarea
                value={editData.description}
                onChange={(e) => setEditData({ ...editData, description: e.target.value })}
                rows={5}
                className="w-full border rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-black"
                placeholder="Descripción del producto"
              />
            </section>

            {/* FOTOS */}
            <section>
              <h4 className="font-semibold text-lg mb-4">Fotos</h4>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {editData.fotos.map((img, i) => (
                  <div key={i} className="relative">
                    <MdCancel
                      className="absolute -top-2 -right-2 cursor-pointer text-red-600"
                      size={22}
                      onClick={() =>
                        setEditData({
                          ...editData,
                          fotos: editData.fotos.filter((f) => f !== img),
                        })
                      }
                    />
                    <Image src={img} alt="" width={200} height={200} className="rounded-md" />
                  </div>
                ))}

                {editData.fotos.length < 5 && (
                  <label className="border border-dashed rounded-md flex items-center justify-center cursor-pointer hover:border-black">
                    Subir foto
                    <input hidden type="file" onChange={uploadImageHandle} />
                  </label>
                )}
              </div>
            </section>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={disabled}
              className="w-full md:w-1/3 bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 disabled:bg-gray-400"
            >
              Subir zapatilla
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubirStock;

/* COMPONENTES */

const Input = ({ label, value, onChange }: any) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1">{label}</label>
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
    />
  </div>
);

const Select = ({ label, value, options, onChange }: any) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium mb-1">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-black"
    >
      <option value="">Seleccionar</option>
      {options.map((o: any) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  </div>
);

const Checkbox = ({ label, checked, onChange }: any) => (
  <label className="flex items-center gap-2 text-sm font-medium">
    <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
    {label}
  </label>
);
