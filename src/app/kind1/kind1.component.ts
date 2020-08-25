import { Component, OnInit, Input } from '@angular/core';
import { ProductData } from '../interfaces/product-data';

@Component({
  selector: 'app-kind1',
  templateUrl: './kind1.component.html',
  styleUrls: ['./kind1.component.scss']
})
export class Kind1Component implements OnInit {

  @Input() producto: ProductData;

  constructor() { }

  ngOnInit(): void {
  }

}
