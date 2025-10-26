import { db } from "@/lib/firebase/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { BookingData } from "@/features/booking/store/booking-store";

export const submitOrder = async (bookingData: BookingData) => {
  try {
    const orderData = {
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
    return { success: true, orderId: docRef.id };
  } catch (error) {
    console.error("Error submitting order: ", error);
    return { success: false, error: "Failed to submit order" };
  }
};
