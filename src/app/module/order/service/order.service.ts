import { Injectable } from '@angular/core';
import { OrderModule } from '../order.module';

@Injectable({
  providedIn: OrderModule
})
export class OrderService {

  constructor() { }
}
