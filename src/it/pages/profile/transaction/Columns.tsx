import { Badge } from "../../../../components/badge";
import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  id: string;
  order: string;
  amount: string;
  created_at: string;
  status: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "order",
    header: "Order ID",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "created_at",
    header: "Date",
    cell: ({ row }) => {
      const createdAt = String(row.getValue("created_at"));
      const formattedDate = new Date(createdAt).toLocaleDateString();

      return formattedDate;
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-start">Status</div>,
    cell: ({ row }) => {
      const status = String(row.getValue("status"));

      return (
        <div className="text-start">
          <Badge
            variant={
              status === "Pending"
                ? "destructive"
                : status === "Cancelled"
                ? "default"
                : "secondary"
            }
          >
            {status}
          </Badge>
        </div>
      );
    },
  },
];
