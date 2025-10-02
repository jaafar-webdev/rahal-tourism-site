import Header from "../../components/Header";
import TripSection from "@/components/TripSection";
import { categories } from "@/app/data/categories";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
   return (
      <main>
         <Header params={params} />
         <TripSection categories={categories} />
      </main>
   );
}
