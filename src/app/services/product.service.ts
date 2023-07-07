import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { Observable } from 'rxjs';
import {tap, catchError} from "rxjs/operators";

@Injectable()
export class ProductService {
  path = "http://localhost:3000/products";

  constructor(private http: HttpClient) { }

  getProducts(categoryId:string) : Observable<Product[]>{
    let newPath = this.path;
    if(categoryId){
      newPath = newPath + "?categoryId=" + categoryId;
    }
    return this.http.get<Product[]>(newPath);
  }
}
