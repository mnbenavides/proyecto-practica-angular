import { Producto } from "./producto";

export interface Orden {
    cliente?:String
    codigoPedido?: String;
    direccion?: String;
    pedido?:Producto[];
    estadoPedido?:String;
    fechaEstimadaEntrega?:Date;
}
