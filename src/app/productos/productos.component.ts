import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

import { TituloComponent } from '../titulo/titulo.component';
import { Kind1Component } from '../kind1/kind1.component';
import { Kind2Component } from '../kind2/kind2.component';

import { ProductData } from '../interfaces/product-data';
import { from } from 'rxjs';

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
