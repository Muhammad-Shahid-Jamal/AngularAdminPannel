import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  logChange(categ: HTMLSelectElement): void {
    console.log(categ.value);
  }
}
