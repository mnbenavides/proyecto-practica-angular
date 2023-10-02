export interface Consulta {
    cliente?:String
    codigoPedido?: String;
    direccion?: String;
    nombre?: String;
    referencia?: String;
    cantidad?:Number;
    estadoPedido?:String;
    fechaEstimadaEntrega?:Date;
}
