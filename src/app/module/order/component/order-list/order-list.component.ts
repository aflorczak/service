import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../../interface/Order';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  emptyArray?: string;
  orders?: Order[];
  error?: boolean;
  errorMessage?: string;

  constructor(
    private orderService: OrderService,
    private router: Router
  ) { }

  getOrders(): void {
    this.orderService.getOrders().subscribe((orders) => {
      if(orders.length > 0) {
        this.emptyArray = undefined;
      } else {
        this.emptyArray = "Brak danych do wyświetlenia";
      }
      this.orders = orders;
    },
    (error: any) => {
      console.log(error);
      this.error = true;
      this.errorMessage = error.message;
    });
  }

  ngOnInit(): void {
    this.getOrders();
  }

  deleteOrderById(id: number | undefined): void {
    this.orderService.deleteOderById(id).subscribe((data) => {
      alert("Oparacja usunięcia zlecenia zakończona sukcesem.");
      this.reload("/orders");
    },
    (error: any) => {
      alert("Oparacja usunięcia zlecenia zakończona porażką.");
    })
  }

  reload(url: string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
    this.router.navigate([url]);
  });
  }

  cancelledById(id: number | undefined): void {
    let message = prompt("Powód anulacji: ");
    this.orderService.moveToCancelledById(id, message).subscribe((data) => {
      alert("Zlecenie zostało anulowane.");
      this.reload(`/orders`);
    }, (error: any) => {
      alert(`Podczas wykonywania anulacji zlecenia wystąpił błąd: ${error.message}`);
    });
  }

  archiveById(id: number | undefined): void {
    this.orderService.moveToArchiveById(id).subscribe((data) => {
      alert("Zlecenie zostało zarchiwizowane.");
      this.reload(`/orders/${id}`);
    }, (error: any) => {
      alert(`Podczas wykonywania archiwizacji zlecenia wystąpił błąd: ${error.message}`);
    });
  }
}
