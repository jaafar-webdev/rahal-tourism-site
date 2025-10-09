import Header from "../../components/Header";
import TripSection from "@/components/TripSection";
import { getCategories } from "@/lib/data/get-categories";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
   const categories = await getCategories();
   return (
      <main>
         <Header params={params} />
         <TripSection categories={categories} />
      </main>
   );
}

export const revalidate = 3600; 
