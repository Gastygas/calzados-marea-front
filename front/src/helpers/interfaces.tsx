export interface IZapatilla {
  nombre: string;
  id?: string;
  marca: string;
  talle: string[];
  color: string;
  material?: string;
  destacado: boolean;
  nuevo: boolean;
  fotos: string[];
  genero: string;
  tipo?:string;
  stock?: string;
  precioMenor: string;
  precioMayor: string;
  oldPrecioMenor: string;
  oldPrecioMayor: string;
  description?: string;
  oferta?:boolean;
}

export interface ILoginData {
  user: string;
  password: string;
}
