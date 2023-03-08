import { Component, OnInit } from '@angular/core';
import { NewOrder } from '../../interface/newOrder';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.scss']
})
export class OrderNewComponent {
  buttonMessage: string = "Zapisz";
  clientsData? : string;
  principal?: string;
  externalCaseNumber? : string;
  segment? : string;
  comments? : string;
  deliveryAddress?: string;
  deliveryDate?: string;
  deliveryTime?: string;
  deliveryComments?: string;
  deliveryBranch? : string;
  returnAddress?: string;
  returnDate?: string;
  returnTime?: string;
  returnComments?: string;
  returnBranch? : string;
  

  constructor(
    private orderService: OrderService
  ) {

  }

  resetForm(): void {
    this.clientsData = undefined,
    this.principal = undefined,
    this.externalCaseNumber = undefined,
    this.segment = undefined,
    this.comments = undefined,
    this.deliveryAddress = undefined,
    this.deliveryDate = undefined,
    this.deliveryTime = undefined,
    this.deliveryComments = undefined,
    this.deliveryBranch = undefined,
    this.returnAddress = undefined,
    this.returnDate = undefined,
    this.returnTime = undefined,
    this.returnComments = undefined,
    this.returnBranch = undefined
  }

  createNewOrder(): void {
    this.buttonMessage = "Zapisuję...";
    this.orderService.createOrder({
      clientsData: this.clientsData,
      principal: this.principal,
      externalCaseNumber: this.externalCaseNumber,
      segment: this.segment,
      comments: this.comments,
      deliveryAddress: this.deliveryAddress,
      deliveryDate: this.deliveryDate,
      deliveryTime: this.deliveryTime,
      deliveryComments: this.deliveryComments,
      deliveryBranch: this.deliveryBranch,
      returnAddress: this.returnAddress,
      returnDate: this.returnDate,
      returnTime: this.returnTime,
      returnComments: this.returnComments,
      returnBranch: this.returnBranch,
    }).subscribe((order: any) => {      
      alert("Tworzenie nowego zlecenia zakończone powodzeniem.");
      this.resetForm();
      this.buttonMessage = "Zapisz";
    },
    (error: any) => {
      alert(error.message);
      this.resetForm();
      this.buttonMessage = "Zapisz";
    });
  }
}
