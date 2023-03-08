import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../interface/Order';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit {
  buttonMessage: string = "Zaktualizuj"; // zmienić na aktualizuję po kliknięciu, a potem przekierowanie do szczegółów sprawy
  id?: number;
  status?: string;
  clientsData?: string;
  principal?: string;
  internalCaseNumber?: string;
  externalCaseNumber?: string;
  segment?: string;
  deliveryAddress?: string;
  deliveryDate?: string;
  deliveryTime?: string;
  deliveryComments?: string;
  deliveryBranch?: string;
  returnAddress?: string;
  returnDate?: string;
  returnTime?: string;
  returnComments?: string;
  returnBranch?: string;
  archive?: boolean;
  reasonForCancelingTheOrder?: string;

  isData?: boolean;
  error?: boolean;
  errorMessage?: string;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.orderService.getOrder(this.route.snapshot.paramMap.get('id')).subscribe((data) => {

      this.isData = true;

      this.id = data.id;
      this.status = data.status;
      this.clientsData = data.clientsData;
      this.principal = data.principal;
      this.internalCaseNumber = data.internalCaseNumber;
      this.externalCaseNumber = data.externalCaseNumber;
      this.segment = data.segment;
      this.deliveryAddress = data.deliveryAddress;
      this.deliveryDate = data.deliveryDate;
      this.deliveryTime = data.deliveryTime;
      this.deliveryComments = data.deliveryComments;
      this.deliveryBranch = data.deliveryBranch;
      this.returnAddress = data.returnAddress;
      this.returnDate = data.returnDate;
      this.returnTime = data.returnTime;
      this.returnComments = data.returnComments;
      this.returnBranch = data.returnBranch;
      this.archive = data.archive;
      this.reasonForCancelingTheOrder = data.reasonForCancelingTheOrder;
    },
    (error: any) => {
      if(error.status === 404 ) {
        this.router.navigateByUrl("/error/not-found");
      }
      this.error = true;
      this.errorMessage = error.message;
    });
  }

  updateOrder(): void {
    this.buttonMessage = "Aktualizuję...";

    let order: Order = {
      id: this.id,
      status: this.status,
      clientsData: this.clientsData,
      principal: this.principal,
      internalCaseNumber: this.internalCaseNumber,
      externalCaseNumber: this.externalCaseNumber,
      segment: this.segment,
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
      archive: this.archive,
      reasonForCancelingTheOrder: this.reasonForCancelingTheOrder,
    }

    this.orderService.updateOrderById(this.id, order).subscribe((data) => {
      alert("AKtualizacja danych zakończona sukcesem.");
      this.router.navigateByUrl(`/orders/${this.id}`);
    },
    (error: any) => {
      alert(error.message);
      this.buttonMessage = "Zaktualizuj";
    });
  }
}
