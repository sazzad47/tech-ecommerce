import { Link } from "react-router-dom";
import { Badge } from "../../../../components/badge";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@mui/material";

export type Payment = {
  id: string;
  title: string;
  amount: string;
  created_at: string;
  status: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "Post ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "donation_needed",
    header: "Goal",
  },
  {
    accessorKey: "total_donations",
    header: "Raised",
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
  {
    id: "actions",
    header: () => <div className="text-start">Actions</div>,
    cell: ({ row }) => {
      const postId = row.original.id;
      return (
        <div className="flex gap-3 justify-start items-center">
          <Link to={`/gd/profile/posts/${postId}`}>
            <Button
              size="small"
              variant="outlined"
              className="capitalize px-2 py-1"
            >
              View
            </Button>
          </Link>
        </div>
      );
    },
  },
];
