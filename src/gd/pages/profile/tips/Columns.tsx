import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  id: string;
  post: string;
  company_tips: string;
  volunteer_tips: string;
  created_at: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "Tips ID",
  },
  {
    accessorKey: "post",
    header: "Post ID",
  },
  {
    accessorKey: "company_tips",
    header: "Company Tips",
  },
  {
    accessorKey: "volunteer_tips",
    header: "Volunteer Tips",
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
