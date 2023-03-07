import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDashboardComponent } from './component/order-dashboard/order-dashboard.component';
import { OrderNewComponent } from './component/order-new/order-new.component';
import { OrderListComponent } from './component/order-list/order-list.component';
import { OrderEditComponent } from './component/order-edit/order-edit.component';
import { OrderDetailsComponent } from './component/order-details/order-details.component';
import { OrderWrapperComponent } from './component/order-wrapper/order-wrapper.component';
import { OrderRoutingModule } from './order-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    OrderDashboardComponent,
    OrderNewComponent,
    OrderListComponent,
    OrderEditComponent,
    OrderDetailsComponent,
    OrderWrapperComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
