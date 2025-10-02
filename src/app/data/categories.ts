import { Category } from "@/types/category";

export const categories: Category[] = [
   {
      id: "regular",
      nameAr: "الرحلات المتاحة الآن",
      nameEn: "Available Trips",
      trips: [
         {
            id: "dahab",
            imageUrl: "/images/dahb.jpg",
            nameAr: "رحلة دهب",
            nameEn: "Dahab Trip",
            durationAr: "4 أيام و5 ليالٍ",
            durationEn: "4 Days & 5 Nights",
            price: { amount: 3000, currency: "EGP" },
            accommodationAr: "فندق 5 نجوم",
            accommodationEn: "5-Star Hotel",
            departureDate: "2025-07-15",
            descriptionAr:
               "استمتع بجمال الطبيعة في دهب، مع رحلة غوص في أشهر المواقع العالمية.",
            descriptionEn:
               "Enjoy the beauty of nature in Dahab, with a diving trip in the most famous international sites.",
         },
         {
            id: "north-coast",
            imageUrl: "/images/sahel.jpg",
            nameAr: "رحلة الساحل الشمالي",
            nameEn: "North Coast Trip",
            durationAr: "3 أيام و4 ليالٍ",
            durationEn: "3 Days & 4 Nights",
            price: { amount: 4000, currency: "EGP" },
            accommodationAr: "شاليه على البحر",
            accommodationEn: "Chalet on the sea",
            departureDate: "2025-08-01",
            descriptionAr:
               "استرخِ على شواطئ الساحل الشمالي الرملية واستمتع بأجواء الصيف.",
            descriptionEn:
               "Relax on the sandy beaches of the North Coast and enjoy the summer atmosphere.",
         },
         {
            id: "el-gouna",
            imageUrl: "/images/elgona.jpg",
            nameAr: "رحلة الجونة",
            nameEn: "El Gouna Trip",
            durationAr: "5 أيام و6 ليالٍ",
            durationEn: "5 Days & 6 Nights",
            price: { amount: 6000, currency: "EGP" },
            accommodationAr: "منتجع سياحي",
            accommodationEn: "Tourist resort",
            departureDate: "2025-09-20",
            descriptionAr: "تجربة فريدة في الجونة، حيث الفخامة والجمال.",
            descriptionEn:
               "A unique experience in El Gouna, where luxury and beauty meet.",
         },
      ],
   },
   {
      id: "honeymoon",
      nameAr: "عروض شهر العسل",
      nameEn: "Honeymoon Offers",
      trips: [
         {
            id: "porto-sokhna-honeymoon",
            imageUrl: "/images/porto-sokhna.jpg",
            nameAr: "عرض شهر العسل في بورتو السخنة",
            nameEn: "Honeymoon Offer in Porto Sokhna",
            durationAr: "3 أيام و4 ليالٍ",
            durationEn: "3 Days & 4 Nights",
            price: { amount: 5500, currency: "EGP" },
            accommodationAr: "جناح فندقي مطل على البحر",
            accommodationEn: "Hotel suite with sea view",
            departureDate: "2025-09-10",
            descriptionAr: "عرض رومانسي خاص لشهر العسل في بورتو السخنة.",
            descriptionEn:
               "A special romantic offer for a honeymoon in Porto Sokhna.",
         },
         {
            id: "el-galala-honeymoon",
            imageUrl: "/images/elgalala.jpg",
            nameAr: "عرض شهر العسل في الجلالة",
            nameEn: "Honeymoon Offer in El Galala",
            durationAr: "4 أيام و5 ليالٍ",
            durationEn: "4 Days & 5 Nights",
            price: { amount: 7000, currency: "EGP" },
            accommodationAr: "فندق 5 نجوم مع إطلالة بانورامية",
            accommodationEn: "5-star hotel with a panoramic view",
            departureDate: "2025-10-05",
            descriptionAr: "استمتعوا بأجواء ساحرة في مدينة الجلالة.",
            descriptionEn:
               "Enjoy a magical atmosphere in the city of El Galala.",
         },
         {
            id: "sharm-grand-plaza-honeymoon",
            imageUrl: "/images/sharm-grand-plaza.jpg",
            nameAr: "عرض شهر العسل في شرم جراند بلازا",
            nameEn: "Honeymoon Offer in Sharm Grand Plaza",
            durationAr: "6 أيام و7 ليالٍ",
            durationEn: "6 Days & 7 Nights",
            price: { amount: 8500, currency: "EGP" },
            accommodationAr: "منتجع فاخر شامل كليًا",
            accommodationEn: "All-inclusive luxury resort",
            departureDate: "2025-11-01",
            descriptionAr: "تجربة لا تُنسى لشهر العسل في قلب شرم الشيخ.",
            descriptionEn:
               "An unforgettable honeymoon experience in the heart of Sharm El Sheikh.",
         },
      ],
   },
];
