import { Category } from "@/types/category";

interface CategoriesTableProps {
  categories: Category[];
}

export default function CategoriesTable({ categories }: CategoriesTableProps) {
  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>Category ID</th>
            <th>Category Name</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.nameEn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
