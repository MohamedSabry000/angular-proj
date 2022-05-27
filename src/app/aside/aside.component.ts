import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product/iprod';
import { CartService } from '../product/cart-service/cart.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  cartItems?: IProduct[];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

}
