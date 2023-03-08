import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-wrapper',
  templateUrl: './order-wrapper.component.html',
  styleUrls: ['./order-wrapper.component.scss']
})
export class OrderWrapperComponent {
  constructor(
    private router: Router
  ) { }

  open(url: string) {
    this.router.navigateByUrl('/spacial-refresh-url', {skipLocationChange: true}).then(() => {
    this.router.navigate([url]);
  });
  }
}
