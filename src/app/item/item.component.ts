import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../product.service';

@Component({
  selector: '.appItem',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  constructor() { }

  ngOnInit() {
  }

}
