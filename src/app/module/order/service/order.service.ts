import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewOrder } from '../interface/newOrder';
import { Order } from '../interface/Order';
import { OrderModule } from '../order.module';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  // order: Order = {
  //   id: 1,
  //   status: "ACCEPTED",
  //   clientsData: "Stefan Wymyślony",
  //   principal: "PZU",
  //   internalCaseNumber: "sdfsdfsdf",
  //   externalCaseNumber: "sdfsdffsd",
  //   segment: "D",
  //   deliveryAddress: "adres dostawy",
  //   deliveryDate: "data dostawy",
  //   deliveryTime: "godzina dostawy",
  //   deliveryComments: "komentarz dostawy",
  //   deliveryBranch: "oddział dostawy",
  //   returnAddress: "adres zwrotu",
  //   returnDate: "data zwrotu",
  //   returnTime: "godzina zwrotu",
  //   returnComments: "komentarz zwrotu",
  //   returnBranch: "oddział zwrotu",
  //   archive: true,
  //   reasonForCancelingTheOrder: "powód anulacji",
  // }

  createOrder(newOrder: NewOrder): Observable<any> {
    return this.http.post(`http://localhost:8080/api/v-0.0.1/orders`, newOrder);
  }

  getOrders(): Observable<any> {
    return this.http.get(`http://localhost:8080/api/v-0.0.1/orders`);
  }

  getOrder(id: string | null): Observable<any> {
    return this.http.get(`http://localhost:8080/api/v-0.0.1/orders/${id}`);
  }

  updateOrderById(id: number | undefined, order: Order ): Observable<any> {
    return this.http.put(`http://localhost:8080/api/v-0.0.1/orders/${id}`, order);
  }

  deleteOderById(id: number | undefined) : Observable<any> {
    return this.http.delete(`http://localhost:8080/api/v-0.0.1/orders/${id}`);
  }
}
