"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateTripSchema,
  CreateTripData,
} from "../schemas/create-trip-schema";
import InputField from "@/components/form/InputField";
import TextareaField from "@/components/form/TextareaField";
import SelectField from "@/components/form/SelectField";
import { Button } from "@/components/ui/Button";
import { useTransition, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { updateTripAction } from "../actions/update-trip-action";
import { deleteTripAction } from "../actions/delete-trip-action";
import Trip from "@/types/trip";
import { Category } from "@/types/category";
import { getCategories } from "@/lib/data/get-categories";

interface EditTripFormProps {
  trip: Trip;
  categoryId: string;
}

export function EditTripForm({ trip, categoryId }: EditTripFormProps) {
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isCategoriesLoading, setIsCategoriesLoading] = useState(true);
  const [isUpdating, startUpdateTransition] = useTransition();
  const [isDeleting, startDeleteTransition] = useTransition();

  useEffect(() => {
    const fetchCategories = async () => {
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
      setIsCategoriesLoading(false);
    };
    fetchCategories();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTripData>({
    resolver: zodResolver(CreateTripSchema),
    defaultValues: {
      nameAr: trip.nameAr,
      nameEn: trip.nameEn,
      durationAr: trip.durationAr,
      durationEn: trip.durationEn,
      price: trip.price,
      accommodationAr: trip.accommodationAr,
      accommodationEn: trip.accommodationEn,
      departureDate: trip.departureDate,
      imageUrl: trip.imageUrl,
      descriptionAr: trip.descriptionAr,
      descriptionEn: trip.descriptionEn,
      categoryId: categoryId,
    },
  });

  const handleUpdate = handleSubmit(async (data) => {
    startUpdateTransition(async () => {
      const result = await updateTripAction(trip.id, data);
      if (result.success) {
        alert("Trip updated successfully!");
        router.push("/trips/view");
      } else {
        alert("Error updating trip.");
        console.error(result.error);
      }
    });
  });

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this trip?")) {
      startDeleteTransition(async () => {
        const result = await deleteTripAction(trip.id);
        if (result.success) {
          alert("Trip deleted successfully!");
          router.push("/trips/view");
        } else {
          alert("Error deleting trip.");
          console.error(result.error);
        }
      });
    }
  };

  if (isCategoriesLoading) {
    return <div className="text-center">Loading categories...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <form
        onSubmit={handleUpdate}
        className="space-y-6 p-4 md:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
      >
        <SelectField
          label="Category"
          {...register("categoryId")}
          options={categories.map((category) => ({
            value: category.id,
            label: category.nameEn,
          }))}
          error={errors.categoryId?.message}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Name (Arabic)"
            {...register("nameAr")}
            error={errors.nameAr?.message}
          />
          <InputField
            label="Name (English)"
            {...register("nameEn")}
            error={errors.nameEn?.message}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Duration (Arabic)"
            {...register("durationAr")}
            error={errors.durationAr?.message}
          />
          <InputField
            label="Duration (English)"
            {...register("durationEn")}
            error={errors.durationEn?.message}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Price"
            type="number"
            {...register("price.amount")}
            error={errors.price?.amount?.message}
          />
          <SelectField
            label="Currency"
            {...register("price.currency")}
            options={[
              { value: "EGP", label: "EGP" },
              { value: "USD", label: "USD" },
            ]}
            error={errors.price?.currency?.message}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Accommodation (Arabic)"
            {...register("accommodationAr")}
            error={errors.accommodationAr?.message}
          />
          <InputField
            label="Accommodation (English)"
            {...register("accommodationEn")}
            error={errors.accommodationEn?.message}
          />
        </div>
        <InputField
          label="Departure Date"
          type="date"
          {...register("departureDate")}
          error={errors.departureDate?.message}
        />
        <InputField
          label="Image URL"
          {...register("imageUrl")}
          error={errors.imageUrl?.message}
        />
        <TextareaField
          label="Description (Arabic)"
          {...register("descriptionAr")}
          error={errors.descriptionAr?.message}
        />
        <TextareaField
          label="Description (English)"
          {...register("descriptionEn")}
          error={errors.descriptionEn?.message}
        />

        <Button type="submit" disabled={isUpdating} fullWidth>
          {isUpdating ? "Updating..." : "Update Trip"}
        </Button>
      </form>
      <div className="mt-4 text-center">
        <Button
          onClick={handleDelete}
          disabled={isDeleting}
          variant="secondary"
        >
          {isDeleting ? "Deleting..." : "Delete Trip"}
        </Button>
      </div>
    </div>
  );
}
