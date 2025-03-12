
interface TransactionItemProps {
    title: string;
    amount: string;
    date: string;
    status: string;
  }
  
  export function TransactionItem({ title, amount, date, status }: TransactionItemProps) {
    return (
      <div className="flex items-center justify-between border-b pb-2">
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
        <div className="text-right">
          <p className="font-medium">{amount}</p>
          <p className="text-sm text-gray-500">{status}</p>
        </div>
      </div>
    );
  }