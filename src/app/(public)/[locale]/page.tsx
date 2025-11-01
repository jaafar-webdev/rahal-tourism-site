import Header from "../../../features/public/header/Header";
import StatsSection from "@/features/public/about/components/StatsSection";
import TripSection from "@/features/public/category-section/TripSection";
import { getCategories } from "@/lib/data/get-categories";
import { getLocale } from "next-intl/server";

export default async function Page() {
  const locale = await getLocale();
  const categories = await getCategories();
  return (
    <main>
      <Header />
      <StatsSection />
      <TripSection categories={categories} locale={locale as "ar" | "en"} />
    </main>
  );
}
