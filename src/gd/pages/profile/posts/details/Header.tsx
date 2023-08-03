import React from "react";
import { Badge } from "../../../../../components/badge";

export interface OrderDetailsProps {
  data: Record<string, any>;
}

const Header: React.FC<OrderDetailsProps> = ({ data }) => {
  return (
    <div className="w-full p-5 mb-5 bg-black-gradient-2 border border-gray-500 rounded-md flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <Badge
          variant={
            data?.status === "Pending"
              ? "destructive"
              : data?.status === "Processing"
              ? "default"
              : data?.status === "Submitted"
              ? "outline"
              : data?.status === "Completed"
              ? "secondary"
              : data?.status === "Approved"
              ? "default"
              : "destructive"
          }
        >
          {data?.status}
        </Badge>

        <div>
          Raised: ${data?.total_donations}
        </div>
     
     </div>
    </div>
  );
};

export default Header;
