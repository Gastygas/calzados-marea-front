export interface IZapatilla {
  nombre: string;
  id?: string;
  precio: string;
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
  oldPrice?: string;
  description?: string;
  oferta?:boolean;
}

export interface ILoginData {
  user: string;
  password: string;
}
