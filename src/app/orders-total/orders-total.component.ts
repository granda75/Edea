import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-total',
  templateUrl: './orders-total.component.html',
  styleUrls: ['./orders-total.component.css']
})
export class OrdersTotalComponent implements OnInit {

  // totalOrders: number;
  // totalShippingCost : number;
  // averageShippingCost: number;

  @Input() totalOrders: number;
  @Input() totalShippingCost: number;
  @Input() averageShippingCost: number;

  constructor() { }

  ngOnInit(): void {
  }

}
