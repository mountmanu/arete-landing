/**
 * Registro de clientes: nombre oficial y logo. Cualquier parte del sitio que
 * mencione a un cliente lo hace por `ClientId` y muestra el logo, no el nombre.
 * Los archivos viven en /public/clientes.
 */

export type ClientId =
  | "notaria-45"
  | "notaria-273"
  | "hospital-la-salle"
  | "dona-tota"
  | "park-wash"
  | "laura-zanuna";

export interface ClientLogoAsset {
  src: string;
  width: number;
  height: number;
  /** Ajuste fino de tamaño frente a los demás logos (1 = igual altura). */
  scale?: number;
}

export interface Client {
  id: ClientId;
  name: string;
  logo?: ClientLogoAsset;
}

export const clients: Record<ClientId, Client> = {
  "notaria-45": {
    id: "notaria-45",
    name: "Notaría Pública 45",
    logo: { src: "/clientes/notaria-45.png", width: 400, height: 400, scale: 1.3 },
  },
  "notaria-273": {
    id: "notaria-273",
    name: "Notaría Pública 273",
    logo: { src: "/clientes/notaria-273.png", width: 400, height: 400, scale: 1.3 },
  },
  "hospital-la-salle": {
    id: "hospital-la-salle",
    name: "Hospital Victoria La Salle",
    logo: { src: "/clientes/hospital-la-salle.png", width: 919, height: 320 },
  },
  "dona-tota": {
    id: "dona-tota",
    name: "Doña Tota",
    logo: { src: "/clientes/dona-tota.png", width: 317, height: 320, scale: 1.25 },
  },
  "park-wash": {
    id: "park-wash",
    name: "Park & Wash Victoria",
    logo: { src: "/clientes/park-wash.png", width: 1219, height: 320, scale: 0.9 },
  },
  "laura-zanuna": {
    id: "laura-zanuna",
    name: "Laura Zanuna",
    logo: { src: "/clientes/laura-zanuna.png", width: 1565, height: 320, scale: 0.95 },
  },
};

export const clientNames = (ids: ClientId[]) =>
  ids.map((id) => clients[id].name).join(" · ");
