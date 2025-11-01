"use server";
import { db } from "@/lib/firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { BookingData } from "@/features/public/booking/store/booking-store";
import { Order } from "@/types/order";
import { revalidatePath } from "next/cache";

export const submitOrder = async (bookingData: BookingData) => {
  try {
    const orderData: Order = {
      name: bookingData.name,
      email: bookingData.email,
      phoneNumber: bookingData.phoneNumber,
      guests: bookingData.guests,
      gatheringPlace: bookingData.gatheringPlace,
      trip: bookingData.trip,
      payment: bookingData.payment,
      totalPrice: bookingData.totalPrice,
      status: "Pending",
      createdAt: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, "orders"), orderData);
    revalidatePath("/orders/view");
    return { success: true, orderId: docRef.id };
  } catch (error) {
    console.error("Error submitting order: ", error);
    return { success: false, error: "Failed to submit order" };
  }
};
