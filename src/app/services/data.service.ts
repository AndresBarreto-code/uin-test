import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

import { Category } from '../interfaces/category';
import { Data } from '../interfaces/data';
import { Product } from '../interfaces/product';
import { ProductData } from '../interfaces/product-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  categories: Object ={};

  constructor(private httpService: HttpService) { }

  //Funcion que usará el servicio de http para solicitar los productos, dentro de la misma se invocarán las funciones para hacer el tratamiento de datos
  getProducts(callback) {
    this.httpService.getProducts()
      .subscribe((data: Data) => {
        console.log(data);
        this.categories = this.sortProducts(this.categorizeProducts(data)); 
        callback(this.categories);
      });
  }
  
  //Funcion para categorizar los productos y devolver un Objecto/Diccionario con los productos que le corresponden
  categorizeProducts(data: Data) {
    let categories: Object = {};
    data.categories.forEach((category: Category) => { 
      categories[`${category.id}`] = category;
      categories[`${category.id}`].products = [];
      data.products.forEach((product: Product) => {      
        if (category.id === product.product_data.categories[0].category_id) {
          categories[`${category.id}`].products.push(product.product_data);
        }
      })
    })
    console.log(categories);
    return categories;    
  }

  //Funcion para ordenar los productos dentro de su misma categoria
  sortProducts(data: Object) {
    Object.keys(data).map((key, index) => {
      data[key].products.sort((a: ProductData, b: ProductData) => a.categories[0].ordinal < b.categories[0].ordinal ? -1: a.categories[0].ordinal > b.categories[0].ordinal? 1 : 0);
    });
    console.log(data);
    return data;    
  }
}
