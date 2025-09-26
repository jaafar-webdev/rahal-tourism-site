import Trip from "./trip";

export interface Category {
   id: string;
   nameAr: string;
   nameEn: string;
   trips: Trip[];
}
