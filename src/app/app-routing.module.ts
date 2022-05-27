import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: 'product-list', component:ProductListComponent  },
  { path: 'product-details', component:ProductListComponent  },
  { path: 'prod-details/:id', component: ProductDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'product-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
