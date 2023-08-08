import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  name: string='Rajanya';
  id: number=1;

  @Output() dataEvent = new EventEmitter<{ id: number; name: string}>();

  sendDataToProductListComponent() {
    this.dataEvent.emit({ id: this.id, name: this.name});
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.name = params['name'];
    });
  }
}
