"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateCategorySchema,
  createCategorySchema,
} from "../schemas/create-category-schema";
import { createCategoryAction } from "../actions/create-category-action";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/Button";
import { useTransition } from "react";

export function CreateCategoryForm() {
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateCategorySchema>({
    resolver: zodResolver(createCategorySchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    startTransition(async () => {
      const result = await createCategoryAction(data);
      if (result.success) {
        alert("Category created successfully!");
        reset();
      } else {
        alert("Error creating category.");
        console.error(result.error);
      }
    });
  });

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-6 p-4 md:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
    >
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

      <Button type="submit" disabled={isPending} fullWidth>
        {isPending ? "Creating..." : "Create Category"}
      </Button>
    </form>
  );
}
