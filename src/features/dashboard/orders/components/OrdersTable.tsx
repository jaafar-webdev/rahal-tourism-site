import { Order } from "@/types/order";
import OrderStatusBadge from "./OrderStatusBadge";
import { Timestamp } from "firebase/firestore";
import { format } from "date-fns";

interface OrdersTableProps {
  orders: Order[];
}

export default function OrdersTable({ orders }: OrdersTableProps) {
  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Trip Name</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.name}</td>
              <td>{order.trip.title}</td>
              <td>
                {order.totalPrice} {order.payment.method}
              </td>
              <td>
                <OrderStatusBadge status={order.status} />
              </td>
              <td>
                {order.createdAt &&
                (order.createdAt instanceof Date ||
                  (order.createdAt as Timestamp).toDate)
                  ? format(
                      order.createdAt instanceof Date
                        ? order.createdAt
                        : (order.createdAt as Timestamp).toDate(),
                      "PPP"
                    )
                  : "N/A"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
