import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
}