export default function Loading() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-48 mb-8"></div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="h-96 bg-gray-200 rounded-lg"></div>
            <div className="h-6 bg-gray-200 rounded w-3/4 mt-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mt-2"></div>
          </div>
          <div className="h-96 bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
