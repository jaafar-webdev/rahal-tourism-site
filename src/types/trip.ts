interface Trip {
   id: string;
   imageUrl: string;
   nameAr: string;
   nameEn: string;
   durationAr: string;
   durationEn: string;
   price: { amount: number; currency: "EGP" | "USD" };
   accommodationAr: string;
   accommodationEn: string;
   departureDate: string;
   descriptionAr: string;
   descriptionEn: string;
}

export default Trip;
