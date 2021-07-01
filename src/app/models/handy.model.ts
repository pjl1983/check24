export interface HandyModel {
  id: number;
  name: string;
  price: number;
  price_reduced: number;
  rating: number;
  topseller: boolean;
  new: boolean;
  brand: string;
  image: string;
  sales_figures: number;
}

export enum VergleichFilterEnum {
  TOPSELLER = "TOPSELLER",
  NEUHEITEN = "NEUHEITEN",
  ANGEBOTE = "ANGEBOTE",
  BELIEBTHEIT = "BELIEBTHEIT"
}
