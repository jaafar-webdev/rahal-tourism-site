import Header from "../../components/Header";
import TripSection from "@/components/TripSection";
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
      <TripSection categories={categories} locale={locale as "ar" | "en"} />
    </main>
  );
}
