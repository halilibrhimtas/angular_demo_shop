import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService} from '../services/alertify.service';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit{
  title = "ÜRÜN LİSTESİ"
  filterText = ""
  products: Product[] = [];


  constructor(private alertifyService: AlertifyService, private http:HttpClient, private productService: ProductService, private activatedRoute: ActivatedRoute) {
    
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      return this.productService.getProducts(params["categoryId"]).subscribe(data => {
        this.products = data;
      });

    })
    
  }

  addToCart(product: { name: string; }){
    this.alertifyService.success(product.name + " added")
  }

}
