import { Badge } from "../../../components/ui/badge"
import { ColumnDef } from "@tanstack/react-table"

export type Payment = {
  id: string
  date: string
  status: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: "ID",
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
          <Badge variant="destructive">{status}</Badge>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-start">Actions</div>,
    cell: () => {
     
      return <div className="flex gap-3 justify-start">
       <button className="px-2 py-1 text-sm cursor-pointer bg-pink-700 hover:bg-pink-800 rounded-md">View</button>
       <button className="px-2 py-1 text-sm cursor-pointer bg-neutral-500 hover:bg-neutral-600 rounded-md">Delete</button>
      </div>
    },
  },
]
