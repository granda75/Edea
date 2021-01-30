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
  title = 'EdeaOrders1';
  loading: boolean;
  first: number;
  rows: number;
  totalRecords: number;

  public orders: Order[];
  public orders2: Order[];
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

  onRowEditInit(order: Order) {
    debugger;
    this.clonedOrders[order.OrderID] = {...order};
    alert('Row edit initialized');
  }

  onRowEditSave(order: Order) {
    debugger;
    console.log('Row edit saved');
    if (order.Freight > 0) 
    {
      delete this.clonedOrders[order.OrderID];
      alert("עידכון הזמנה הצליח");
      //this.messageService.add({severity:'success', summary: 'Success', detail:'Product is updated'});
    }  
    else 
    {
        //this.messageService.add({severity:'error', summary: 'Error', detail:'Invalid Price'});
        alert("עלות משלוח לא תקינה");
    }
  }

  onRowEditCancel(order: Order, index: number) {
    console.log('Row edit cancelled');
    this.orders2[index] = this.clonedOrders[order.OrderID];
    delete this.orders2[order.OrderID];
  }

  onEnterCustName()
  {
    alert("onEnterCustName");
  }

  loadOrders()
  {
    this.ordersService.getOrders().subscribe(data=>{
      this.ordersData = data;
      this.orders = data.ordersList;
      this.orders2 = data.ordersList;
      this.totalOrders = data.totalOrders;
      this.totalShippingCost = data.totalShippingCost;
      this.averageShippingCost = data.averageShippingCost;
      this.loading = false;
      
    });
   
  }

  next() {
    this.first = this.first + this.rows;
}

prev() {
    this.first = this.first - this.rows;
}

reset() {
    this.first = 0;
}

isLastPage(): boolean {
    return this.orders ? this.first === (this.orders.length - this.rows): true;
}

isFirstPage(): boolean {
    return this.orders ? this.first === 0 : true;
}


}
