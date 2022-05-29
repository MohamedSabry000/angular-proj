import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HeaderContainerComponent } from './header-container/header-container.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCardComponent } from './product/product-card/product-card.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { StringSlicePipe } from './string-slice.pipe';
import { FavouriteProductComponent } from './product/favourite-product/favourite-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { UserDetailsComponent } from './user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    HeaderContainerComponent,
    AsideComponent,
    FooterComponent,
    TodoListComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    StringSlicePipe,
    FavouriteProductComponent,
    LoginComponent,
    AddProductComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
