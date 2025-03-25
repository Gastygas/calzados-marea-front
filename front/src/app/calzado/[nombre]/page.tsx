"use client";
import Section1 from "@/components/Section-1/Section-1";
import SingleZapatilla from "@/components/SingleZapatilla/SingleZapatilla";
import { useParams } from "next/navigation";

const page = () => {
  const params = useParams();
  const nombreZapatilla = decodeURIComponent(params.nombre as string);
  return (
    <>
      <SingleZapatilla nombreZapatilla={nombreZapatilla.toLocaleLowerCase()} />
      <Section1 />
    </>
  );
};

export default page;
