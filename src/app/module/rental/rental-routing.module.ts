import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RentalDashboardComponent } from "./component/rental-dashboard/rental-dashboard.component";
import { RentalDetailsComponent } from "./component/rental-details/rental-details.component";
import { RentalEditComponent } from "./component/rental-edit/rental-edit.component";
import { RentalListComponent } from "./component/rental-list/rental-list.component";
import { RentalNewComponent } from "./component/rental-new/rental-new.component";
import { RentalWrapperComponent } from "./component/rental-wrapper/rental-wrapper.component";

const routes: Routes = [
  {
    path: 'rentals',
    component: RentalWrapperComponent,
    children: [
      { path: 'dashboard', component: RentalDashboardComponent },
      { path: 'new', component: RentalNewComponent },
      { path: ':id', component: RentalDetailsComponent },
      { path: ':id/edit', component: RentalEditComponent },
      { path: '', component: RentalListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalRoutingModule { }