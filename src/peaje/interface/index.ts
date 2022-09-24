import { ReactElement } from "react";

export interface ChildrenProps {
    children: ReactElement | ReactElement[]
}

export interface IRegisterVehicle {
    typeVehicle: string;
    price: number;
    typeCategory: string;
    labelCategory: string;
    id: string;
    placa: string;
    turno: string;
}