import Header from "../../../components/Header";
import StatsSection from "@/features/public/about/components/StatsSection";
import TripSection from "@/features/public/category-section/TripSection";
import { getCategories } from "@/lib/data/get-categories";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const categories = await getCategories();
  return (
    <main>
      <Header />
      <StatsSection />
      <TripSection categories={categories} locale={locale as "ar" | "en"} />
    </main>
  );
}
