import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../custom/common/DataTable";
import { TEmployee } from "@/@types";
import { useGetEmployeeQuery } from "@/api/crud";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";
import { MdAdd } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const columns: ColumnDef<TEmployee>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "website",
    header: "Website",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              {/* <span className="sr-only"></span> */}
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => console.log("Edit")}>
              <span className=" cursor-pointer">Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log("Delete")}>
              <span className="text-red-400 cursor-pointer">Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export const EmployeeTable = () => {
  const navigate = useNavigate();
  const { data } = useGetEmployeeQuery(``);
  console.log(data);

  return (
    <div className="container mx-auto py-10 flex flex-col">
      <div
        className="self-end p-2 mb-2 text-2xl cursor-pointer text-white font-black rounded-md bg-blue-700 "
        onClick={() => {
          navigate("/employee/create");
        }}
      >
        <MdAdd />
      </div>
      <DataTable columns={columns} data={data ? data : []} />
    </div>
  );
};
