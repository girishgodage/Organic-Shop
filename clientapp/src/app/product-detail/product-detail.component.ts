import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable,combineLatest } from 'rxjs';
import { ActionSequence } from 'protractor';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products: any[];
  obs;
  id;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { 
    this.getDetail();
  }

  getDetail() {

    this.obs = combineLatest([
      this.productService.getProducts(),
      this.route.params
    ])

    this.obs.subscribe(res => {
      this.products = res[0];
      this.id = res[1]['id'];
    });
    
  }
  ngOnInit() {
  }

}
