import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./component/not-found/not-found.component";

const routes: Routes = [
    {
        path: 'error/not-found', component: NotFoundComponent
    },
    {
        path: '**', redirectTo: 'error/not-found', pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ErrorRoutingModule { }