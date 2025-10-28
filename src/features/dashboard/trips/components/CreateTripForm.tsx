"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateTripSchema,
  CreateTripData,
} from "../schemas/create-trip-schema";
import { createTripAction } from "../actions/create-trip-action";
import InputField from "@/components/form/InputField";
import TextareaField from "@/components/form/TextareaField";
import SelectField from "@/components/form/SelectField";
import { Button } from "@/components/ui/Button";
import { useTransition } from "react";

import { Category } from '@/types/category';

interface CreateTripFormProps {
  categories: Category[];
}

export function CreateTripForm({ categories }: CreateTripFormProps) {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateTripData>({
    resolver: zodResolver(CreateTripSchema),
    defaultValues: {
      price: { currency: "EGP" },
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    startTransition(async () => {
      const result = await createTripAction(data);
      if (result.success) {
        alert("Trip created successfully!");
        reset();
      } else {
        alert("Error creating trip.");
        console.error(result.error);
      }
    });
  });

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6 p-4 md:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    >
      <SelectField
        label="Category"
        {...register('categoryId')}
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

      <Button type="submit" disabled={isPending} fullWidth>
        {isPending ? "Creating..." : "Create Trip"}
      </Button>
    </form>
  );
}
