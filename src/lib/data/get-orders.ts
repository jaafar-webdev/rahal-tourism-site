import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";
import { Order } from "@/types/order";

export async function getOrders(): Promise<Order[]> {
  try {
    const ordersCollectionRef = collection(db, "orders");
    const querySnapshot = await getDocs(ordersCollectionRef);
    const orders = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Order[];
    return orders;
  } catch (error) {
    console.error("Error fetching orders:", error);
    return [];
  }
}
