import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from './../iprod';
import { ProdServiceService } from './../prod-service/prod-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private prodService: ProdServiceService) { }

  ngOnInit(): void {
  }

  myform = new FormGroup(
    {
      title: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.minLength(5)]),
      url: new FormControl('', [Validators.required, Validators.minLength(5)]),
      price: new FormControl('', [Validators.required, Validators.minLength(5)]),

    }

  )

  onSubmit( prod: IProduct) {
    console.log(prod);

    return this.prodService.post(prod);
  }

}
