import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  template: `<app-child (dataEvent)="handleDataEvent($event)"></app-child>`,
})
export class ProductListComponent {
  products = products;

  constructor(private router: Router){}

  handleDataEvent(data: { id: number; name: string}) {
    this.router.navigate(['/some-route'], {
      queryParams: { id: data.id, name: data.name},
    })
  }

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/