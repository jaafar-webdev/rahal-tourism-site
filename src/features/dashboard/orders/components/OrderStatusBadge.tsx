import React from "react";
import { Order } from "@/types/order";

interface OrderStatusBadgeProps {
  status: Order["status"];
}

export default function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
  let badgeClasses =
    "px-2 inline-flex text-xs leading-5 font-semibold rounded-full ";

  switch (status) {
    case "Pending":
      badgeClasses += "bg-yellow-100 text-yellow-800";
      break;
    case "Confirmed":
      badgeClasses += "bg-green-100 text-green-800";
      break;
    case "Cancelled":
      badgeClasses += "bg-red-100 text-red-800";
      break;
    default:
      badgeClasses += "bg-gray-100 text-gray-800";
      break;
  }

  return <span className={badgeClasses}>{status}</span>;
}
