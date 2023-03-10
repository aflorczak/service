import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalRoutingModule } from './rental-routing.module';
import { RentalDashboardComponent } from './component/rental-dashboard/rental-dashboard.component';
import { RentalWrapperComponent } from './component/rental-wrapper/rental-wrapper.component';
import { RouterModule } from '@angular/router';
import { RentalNewComponent } from './component/rental-new/rental-new.component';
import { RentalDetailsComponent } from './component/rental-details/rental-details.component';
import { RentalEditComponent } from './component/rental-edit/rental-edit.component';
import { RentalListComponent } from './component/rental-list/rental-list.component';



@NgModule({
  declarations: [
    RentalDashboardComponent,
    RentalWrapperComponent,
    RentalNewComponent,
    RentalDetailsComponent,
    RentalEditComponent,
    RentalListComponent
  ],
  imports: [
    CommonModule,
    RentalRoutingModule,
    RouterModule
  ]
})
export class RentalModule { }
