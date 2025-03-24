"use client"
import Busqueda from "@/components/Busqueda/Busqueda";
import { useParams } from "next/navigation";

const page = () => {
      const params = useParams();
      const busqueda = decodeURIComponent(params.busqueda as string)      
    return (
      <Busqueda  busqueda={busqueda} />
    )
}
  
export default page;
