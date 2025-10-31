"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateCategorySchema,
  createCategorySchema,
} from "../schemas/create-category-schema";
import InputField from "@/components/form/InputField";
import { Button } from "@/components/ui/Button";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { updateCategoryAction } from "../actions/update-category-action";
import { deleteCategoryAction } from "../actions/delete-category-action";
import { Category } from "@/types/category";

interface EditCategoryFormProps {
  category: Category;
}

export function EditCategoryForm({ category }: EditCategoryFormProps) {
  const router = useRouter();
  const [isUpdating, startUpdateTransition] = useTransition();
  const [isDeleting, startDeleteTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCategorySchema>({
    resolver: zodResolver(createCategorySchema),
    defaultValues: {
      nameAr: category.nameAr,
      nameEn: category.nameEn,
    },
  });

  const handleUpdate = handleSubmit(async (data) => {
    startUpdateTransition(async () => {
      const result = await updateCategoryAction(category.id, data);
      if (result.success) {
        alert("Category updated successfully!");
        router.push("/categories/view");
      } else {
        alert("Error updating category.");
        console.error(result.error);
      }
    });
  });

  const handleDelete = async () => {
    if (confirm("Are you sure you want to delete this category?")) {
      startDeleteTransition(async () => {
        const result = await deleteCategoryAction(category.id);
        if (result.success) {
          alert("Category deleted successfully!");
          router.push("/categories/view");
        } else {
          alert("Error deleting category.");
          console.error(result.error);
        }
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form
        onSubmit={handleUpdate}
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

        <Button type="submit" disabled={isUpdating} fullWidth>
          {isUpdating ? "Updating..." : "Update Category"}
        </Button>
      </form>
      <div className="mt-4 text-center">
        <Button
          onClick={handleDelete}
          disabled={isDeleting}
          variant="secondary"
        >
          {isDeleting ? "Deleting..." : "Delete Category"}
        </Button>
      </div>
    </div>
  );
}
