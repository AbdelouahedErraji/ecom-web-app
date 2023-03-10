import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CustomersComponent} from "./customers/customers.component";
import {OrdersComponent} from "./orders/orders.component";
import {OrderDetailsComponent} from "./order-details/order-details.component";
import { AuthGuard } from './guards/security.guard';

const routes: Routes = [
  {
    path : "products", 
    component : ProductsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['USER'] }
  },
  {
    path : "customers", component : CustomersComponent, 
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN'] }
  },
  {
    path : "orders/:customerId", component : OrdersComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN'] }
  },
  {
    path : "order-details/:orderId", component : OrderDetailsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ADMIN'] }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
