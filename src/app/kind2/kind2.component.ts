import { Component, OnInit, Input } from '@angular/core';
import { ProductData } from '../interfaces/product-data';

@Component({
  selector: 'app-kind2',
  templateUrl: './kind2.component.html',
  styleUrls: ['./kind2.component.scss']
})
export class Kind2Component implements OnInit {

  @Input() producto: ProductData;

  constructor() { }

  ngOnInit(): void {
  }

}
