import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrderDashboardComponent } from "./component/order-dashboard/order-dashboard.component";
import { OrderDetailsComponent } from "./component/order-details/order-details.component";
import { OrderEditComponent } from "./component/order-edit/order-edit.component";
import { OrderListComponent } from "./component/order-list/order-list.component";
import { OrderNewComponent } from "./component/order-new/order-new.component";
import { OrderWrapperComponent } from "./component/order-wrapper/order-wrapper.component";

const routes: Routes = [
    {
        path: 'orders', component: OrderWrapperComponent, children: [
            {
                path: 'dashboard', component: OrderDashboardComponent
            },
            {
                path: 'new', component: OrderNewComponent
            },
            {
                path: ':id', component: OrderDetailsComponent
            },
            {
                path: ':id/edit', component: OrderEditComponent
            },
            {
                path: '', component: OrderListComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderRoutingModule { }