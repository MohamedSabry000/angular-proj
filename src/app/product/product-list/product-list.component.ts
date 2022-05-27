import { Component, OnInit } from '@angular/core';

import { IProduct } from './../iprod';
import { ProdServiceService } from './../prod-service/prod-service.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  prodList?: IProduct[];
  selectedProduct?: IProduct;

  constructor(private prodService: ProdServiceService) { }

  ngOnInit(): void {
    this.prodList = this.prodService.getProdList();
  }

  selectProd(e: any) {
    this.selectedProduct = e;
  }

}
