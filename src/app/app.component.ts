import { Component, OnInit } from '@angular/core';
import { Item, ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  items: Item[];
  constructor(private products: ProductService) {

  }
  ngOnInit() {
    this.items = this.products.itemList;
  }
}
