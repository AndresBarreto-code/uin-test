import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

import { ProductData } from '../interfaces/product-data';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  categoriesHtml: Array<any> = [];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getProducts((categories: Object) => {
      Object.keys(categories).map((key, index) => { 
        this.categoriesHtml.push({ titulo: categories[key].name, componente: "titulo" });
        categories[key].products.forEach((product: ProductData) => {
          this.categoriesHtml.push({ producto: product, componente: product.kind === 1 ? "kind1" : "kind2" });
          console.log(this.categoriesHtml)
        });
      })
    });
  }

}
