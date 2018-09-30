import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  itemList: Item[];
  constructor() {
    this.itemList = [
      new Item({
        categ: 'Electronics',
        productName: 'Mobiles',
        brandName : 'iphone',
        price: 33000,
        colorName: 'Gold',
        exPr: 1000
      }),
      new Item({
        categ: 'Electronics',
        productName: 'Mobiles',
        brandName : 'iphone',
        price: 33000,
        colorName: 'Gold',
        exPr: 9000
      }),
      new Item({
        categ: 'Electronics',
        productName: 'Mobiles',
        brandName : 'iphone',
        price: 33000,
        colorName: 'Gold',
        exPr: 1500
      })
    ];
  }
}
export class Item {
  categoryName: string;
  productName: string;
  brandName: string;
  price: number;
  colorName: string;
  exPr: number;
  constructor(obj: {
      categ: string,
      productName: string,
      brandName: string,
      price: number,
      colorName: string,
      exPr: number
    }) {
      this.categoryName = obj.categ;
      this.productName = obj.productName;
      this.brandName = obj.brandName;
      this.price = obj.price;
      this.colorName = obj.colorName;
      this.exPr = obj.exPr;
  }

  getTotalPrice(): number {
    return this.price + this.exPr;
  }
}
