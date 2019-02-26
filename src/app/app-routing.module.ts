import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CreateProductComponent} from "./create-product/create-product.component";
import {UpdateProductComponent} from "./update-product/update-product.component";


const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "createProduct", component: CreateProductComponent
  },
  {
    path: "products/:id/update", component: UpdateProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
