import { Component } from '@angular/core';

@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.scss']
})
export class OrderNewComponent {
  clientsData? : string;
  // internalCaseNumber? : string;
  externalCaseNumber? : string;
  segment? : string;
  comments? : string;
  deliveryAddress?: string;
  deliveryDate?: string;
  deliveryComments?: string;
  deliveryBranch? : string;
  returnAddress?: string;
  returnDate?: string;
  returnComments?: string;
  returnBranch? : string;

  show() {
    console.log({
      'clientsData': this.clientsData,
      // 'internalCaseNumber': this.internalCaseNumber,
      'externalCaseNumber': this.externalCaseNumber,
      'segment': this.segment,
      'comments': this.comments,
      'deliveryAddress': this.deliveryAddress,
      'deliveryDate': this.deliveryDate,
      'deliveryComments': this.deliveryComments,
      'deliveryBranch': this.deliveryBranch,
      'returnAddress': this.returnAddress,
      'returnDate': this.returnDate,
      'returnComments': this.returnComments,
      'returnBranch': this.returnBranch,
    });
  }
}
