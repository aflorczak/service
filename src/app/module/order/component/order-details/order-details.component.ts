import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Order } from '../../interface/Order';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  order?: Order;
  error?: boolean;
  errorMessage?: string;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  getOrder(id: string | null): void {
    this.orderService.getOrder(id).subscribe(order => {
      this.order = order
    },
    (error: any) => {
      if(error.status === 404 ) {
        this.router.navigateByUrl("/error/not-found");
      }
      this.error = true;
      this.errorMessage = error.message;
    })
  }

  deleteOrderById(id: number | undefined): void {
    this.orderService.deleteOderById(id).subscribe((data) => {
        alert("Oparacja usunięcia zlecenia zakończona sukcesem.");
        this.router.navigateByUrl("/orders");
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

  archiveById(id: number | undefined): void {
    this.orderService.moveToArchiveById(id).subscribe((data) => {
      alert("Zlecenie zostało zarchiwizowane.");
      this.reload(`/orders/${id}`);
    }, (error: any) => {
      alert(`Podczas wykonywania archiwizacji zlecenia wystąpił błąd: ${error.message}`);
    });
  }

  cancelledById(id: number | undefined): void {
    let message = prompt("Powód anulacji: ");
    this.orderService.moveToCancelledById(id, message).subscribe((data) => {
      alert("Zlecenie zostało anulowane.");
      this.reload(`/orders/${id}`);
    }, (error: any) => {
      alert(`Podczas wykonywania anulacji zlecenia wystąpił błąd: ${error.message}`);
    });
  }

  ngOnInit(): void {
    this.getOrder(this.route.snapshot.paramMap.get('id'));
  }
}
