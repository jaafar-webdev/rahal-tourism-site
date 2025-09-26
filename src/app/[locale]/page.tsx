import Header from "../../components/Header";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
   return <Header params={params} />;
}
