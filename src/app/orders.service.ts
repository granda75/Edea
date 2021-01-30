import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from './order.model';
import { OrdersData } from './orders-data.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
              };

constructor(private http: HttpClient) { }

// getOrders(first:number, rows:number):Observable<Order[]>
// {
//     let url = environment.apiEndpoint;
//     return this.http.get<Order[]>(url);
// }

getOrders():Observable<OrdersData>
{
    let url = environment.apiEndpoint;
    return this.http.get<OrdersData>(url);
}

}
