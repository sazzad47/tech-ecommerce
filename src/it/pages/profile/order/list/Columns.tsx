import { Button } from "@mui/material";
import { Badge } from "../../../../../components/badge";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";

export type Order = {
  id: string;
  title: string;
  date: string;
  status: string;
};

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "date",
    header: "Date",
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
                : status === "Processing"
                ? "default"
                : status === "Submitted"
                ? "outline"
                : status === "Completed"
                ? "secondary"
                : status === "Approved"
                ? "default"
                : "destructive"
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
      const orderId = row.original.id;
      const status = String(row.getValue("status"));
      return (
        <div className="flex gap-3 justify-start items-center">
          <Link to={`/it/profile/orders/${orderId}`}>
            <Button
              size="small"
              variant="outlined"
              className="capitalize px-2 py-1"
            >
              View
            </Button>
          </Link>
          {status === "Pending" && (
            <Link to={`/it/profile/orders/edit/${orderId}`}>
              <Button
                variant="contained"
                size="small"
                className="px-2 py-1 capitalize cursor-pointer bg-neutral-500 hover:bg-neutral-600"
              >
                Edit
              </Button>
            </Link>
          )}
        </div>
      );
    },
  },
];
