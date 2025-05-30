'use client'; // Si usás íconos o interacción

import { FaRegFrownOpen } from 'react-icons/fa';

const BusquedaNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen w-[30vh] md:w-[70vh] -mt-32">
      <div className="flex flex-col items-center text-center space-y-4">
        <FaRegFrownOpen size={50} />
        <h3 className="text-lg font-semibold">No encontramos ningún producto relacionado a tu búsqueda</h3>
        <p className="text-sm text-gray-600">Por favor revisá e intentá de nuevo</p>
      </div>
    </div>
  );
};

export default BusquedaNotFound;