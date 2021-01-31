import { Order } from "./order.model";

export class OrdersData {
    ordersList: Order[];
    totalOrders: number;
    totalShippingCost : number;
    averageShippingCost: number;
}

