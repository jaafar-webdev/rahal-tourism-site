import PaymentFlow from "@/features/payment/PaymentFlow";
import { getTranslations } from "@/lib/i18n";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  console.log(params);
  const { locale } = await params;
  const t = getTranslations(locale as "ar" | "en");
  return (
    <div className=" min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          {t.Complete_reservation}
        </h1>
        <PaymentFlow t={t} />
      </div>
    </div>
  );
}
