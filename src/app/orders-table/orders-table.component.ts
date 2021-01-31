import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Order } from '../order.model';
import { OrdersData } from '../orders-data.model';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements OnInit 
{
  title = 'EdeaOrders';
  loading: boolean;
  first: number;
  rows: number;
  totalRecords: number;

  public order: Order;
  public orders: Order[];
  public ordersData: OrdersData;
  
  clonedOrders: { [s: string]: Order; } = {};

  totalOrders: number;
  totalShippingCost : number;
  averageShippingCost: number;


  constructor(private ordersService: OrdersService) { 

  }

  ngOnInit(): void {

    this.totalRecords = 10;
    this.first = 0;
    this.rows = 10;
    this.loadOrders();
  }

  
  onEditInit(event)
  {
    this.order = event.data;
    this.clonedOrders[this.order.orderID] = {...this.order};
  }
  
  onEditComplete(event)
  {
    if ( this.order.shippingCost < 0 )
    {
        alert("עלות משלוח צריך להיות מספר חיובי");  
        this.order.shippingCost = 0;
        return;
    }
    var strShippingCost = "" + this.order.shippingCost;
    if ( strShippingCost.length > 2)
    {
        alert("עלות משלוח צריך להיות עד 2 ספרות");
        this.order.shippingCost = 0;
        return;
    }
    debugger;
    this.totalShippingCost = Number(this.totalShippingCost) - Number(this.clonedOrders[this.order.orderID].shippingCost) + Number(this.order.shippingCost);
    this.averageShippingCost = this.totalShippingCost/this.orders.length;

    if (this.order.companyName != null && this.order.companyName.length > 30)
    {
        alert("שם לקוח צריך להיות עד 30 תווים");
        this.order.companyName = this.clonedOrders[this.order.orderID].companyName;
    }

  }
  onEditCancel(event)
  {
    //alert("onEditCancel");
  }

  loadOrders()
  {
    this.ordersService.getOrders().subscribe(data=>{
      this.ordersData = data;
      this.orders = data.ordersList;
      this.totalOrders = data.totalOrders;
      this.totalShippingCost = data.totalShippingCost;
      this.averageShippingCost = data.averageShippingCost;
      this.loading = false;
      
    });
   
  }

}
