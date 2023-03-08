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

  ngOnInit(): void {
    this.getOrder(this.route.snapshot.paramMap.get('id'));
  }
}
