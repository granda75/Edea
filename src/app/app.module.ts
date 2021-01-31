import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { OrdersTotalComponent } from './orders-total/orders-total.component';
import { FormsModule } from '@angular/forms';
// import { DataTableModule } from 'primeng/primeng'; // Here
// import { PaginatorModule } from 'primeng/primeng'; // Here


@NgModule({
  declarations: [
    AppComponent,
    OrdersTableComponent,
    OrdersTotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
