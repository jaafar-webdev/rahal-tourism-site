import PaymentFlow from "@/features/public/payment/PaymentFlow";
import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations();

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          {t("Complete_reservation")}
        </h1>
        <PaymentFlow />
      </div>
    </div>
  );
}
