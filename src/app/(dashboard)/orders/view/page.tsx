import { getOrders } from "@/lib/data/get-orders";
import OrdersTable from "@/features/dashboard/orders/components/OrdersTable";

export default async function ViewOrdersPage() {
  const orders = await getOrders();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">View Orders</h1>
          <p className="text-gray-600 text-lg">
            Manage and explore all customer orders
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <OrdersTable orders={orders} />
        </div>
      </div>
    </div>
  );
}
