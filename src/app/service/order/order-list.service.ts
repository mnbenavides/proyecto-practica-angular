import { Injectable } from '@angular/core';
import { Global } from '../../modules/global/global';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OrderListService {
  //Metodo constructor
  constructor(private http: HttpClient) {}

  //Metodo que permite enviar la solicitud al servicio
  getOrder(params: any) {
    return this.http.get<any>(Global.URL + '/pedido', { params: params });
  }
}
