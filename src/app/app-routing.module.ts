import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "", redirectTo : "products", pathMatch: "full"},
  {path: "products", component: ProductComponent},
  {path: "products/category/:categoryId", component: ProductComponent},
  {path: "login", component: LoginComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
