import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  id: string;
  post: string;
  amount: string;
  created_at: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "Donation ID",
  },
  {
    accessorKey: "post",
    header: "Post ID",
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
];
