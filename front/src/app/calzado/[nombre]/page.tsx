"use client"
import SingleZapatilla from "@/components/SingleZapatilla/SingleZapatilla";
import { useParams } from "next/navigation";

const page = () => {
    const params = useParams();
    const nombreZapatilla = decodeURIComponent(params.nombre as string)
    return (
        <SingleZapatilla nombreZapatilla={nombreZapatilla.toLocaleLowerCase()}/>
    );
};

export default page