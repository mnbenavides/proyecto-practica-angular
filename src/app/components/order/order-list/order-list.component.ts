import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { OrderListService } from '../../../service/order/order-list.service';
import { Consulta } from '../../../modules/consulta';
import { Producto } from '../../../modules/producto';
import { Orden } from '../../../modules/orden';

import { PamatroService } from 'src/app/service/parametro/pamatro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  //Declaracion de variables
  detalle: Consulta[] = [];
  params: any;
  codigo!: number;
  documento!: string;
  tipo!: string;
  productos: Producto[] = [];
  orden!: Orden;
  openModal: boolean = false;

  //Metodo constructor
  constructor(
    private location: Location,
    private orderService: OrderListService,
    private paramService: PamatroService,
    private router: Router
  ) {
    this.getParams();
    this.getData();
  }

  ngOnInit(): void {
    this.getData();
  }

  //Metodo pobtener parametros
  getParams() {
    this.params = this.paramService.parametroCompartido;
    if (!this.params) {
      this.goBack();
    }
  }
  //Metodo obtener parametros del servico 
  getData() {
    if (this.params) {
      this.orderService.getOrder(this.params).subscribe((data: any) => {
        this.detalle = data.detalle;
        this.orderData(this.detalle);
      });
     
    }
  }

  //Metodo organizar el resultado del servicio en interfaces
  orderData(detalle: Consulta[]){
    if (!detalle || detalle.length == 0) {
      this.goBack();
    }
    detalle.forEach((element) => {
      const pedido = {
        producto: element.nombre,
        referencia: element.referencia,
        cantidad: element.cantidad,
      };
      this.productos.push(pedido);
    });
    this.orden = {
      cliente: detalle[0].cliente,
      codigoPedido: detalle[0].codigoPedido,
      direccion: detalle[0].direccion,
      estadoPedido: detalle[0].estadoPedido,
      fechaEstimadaEntrega: detalle[0].fechaEstimadaEntrega,
      pedido: this.productos,
    };
  }

  //Metodo que permite regresar al componente
  goBack() {
    this.location.back();
  }

  //Metodo visualziar componente salir
  exit() {
    this.router.navigate(['/', 'exit']);
  }
}
