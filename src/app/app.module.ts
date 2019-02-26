import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CreateProductComponent } from './create-product/create-product.component';
import {UpdateProductComponent} from "./update-product/update-product.component";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateProductComponent,
    UpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
