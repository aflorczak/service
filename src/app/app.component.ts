import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'service';

  constructor(
    private router: Router
  ) { }

  open(url: string) {
    this.router.navigateByUrl('/spacial-refresh-url', {skipLocationChange: true}).then(() => {
    this.router.navigate([url]);
  });}
}
