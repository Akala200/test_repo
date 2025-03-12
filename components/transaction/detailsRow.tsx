// Reusable Component for Detail Row
export function DetailRow({ label, value }: { label: string; value: string }) {
    return (
      <div className="flex justify-between border-b pb-6">
        <span className="text-gray-500">{label}</span>
        <span className="font-medium">{value}</span>
      </div>
    );
  }