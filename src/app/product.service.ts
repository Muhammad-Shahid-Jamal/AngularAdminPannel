import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _url = '/assets/data/items.json';
  constructor(private http: HttpClient) {
  }

  getListItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this._url);
  }
}
export interface Item {
  categoryName: string;
  productName: string;
  brandName: string;
  price: number;
  colorName: string;
  exPr: number;
}
