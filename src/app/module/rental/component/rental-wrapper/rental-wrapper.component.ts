import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rental-wrapper',
  templateUrl: './rental-wrapper.component.html',
  styleUrls: ['./rental-wrapper.component.scss']
})
export class RentalWrapperComponent {
  constructor(
    private router: Router
  ) { }

  open(url: string) {
    this.router.navigateByUrl('/spacial-refresh-url', {skipLocationChange: true}).then(() => {
    this.router.navigate([url]);
  });
  }
}
