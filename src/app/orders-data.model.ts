import { Order } from "./order.model";

export class OrdersData {
    ordersList: Order[];
    totalOrders: number;
    totalShippingCost : number;
    averageShippingCost: number;
}

// public List<Order> OrdersList { get; set; }
// public int TotalOrders { get; set; }
// public double TotalShippingCost { get; set; }

// public double AverageShippingCost { get; set; }
// }