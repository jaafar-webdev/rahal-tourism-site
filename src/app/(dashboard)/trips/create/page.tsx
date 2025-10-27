import { CreateTripForm } from '@/features/trips/components/CreateTripForm';

export default function CreateTripPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">إنشاء رحلة جديدة</h1>
      <div className="max-w-4xl mx-auto">
        <CreateTripForm />
      </div>
    </div>
  );
}
