import { Component } from '@angular/core';
import { Order } from './order.model';
import { OrdersService } from './orders.service';
import { LazyLoadEvent } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EdeaOrders1';
  loading: boolean;
  first: number;
  rows: number;
  totalRecords: number;

  public orders: Order[];
 

  constructor(private ordersService: OrdersService) {

   }

  ngOnInit(): void {

    // this.ordersService.getOrders().subscribe(data=>{
    //   this.orders = data;
    //   debugger;
    // });
    this.totalRecords = 10;
  }
  
    

    loadOrders(event: LazyLoadEvent) {
      this.loading = true;
      this.first = event.first;
      this.rows = event.rows;

      //in a real application, make a remote request to load data using state metadata from event
      //event.first = First row offset
      //event.rows = Number of rows per page
      //event.sortField = Field name to sort with
      //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
      //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

      //imitate db connection over a network

      debugger;
      
      this.ordersService.getOrders(this.first, this.rows).subscribe(data=>{
        this.orders = data;
        this.loading = false;
        debugger;
      });

     
    }

  }

