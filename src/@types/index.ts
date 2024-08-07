import { ColumnDef } from "@tanstack/react-table";

export interface RootLayoutProps {
  children: React.ReactNode;
}

export interface IEmployee {
  id: string;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
}

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export type TEmployee = {
  id?: string;
  name?: string;
  website?: string;
  username?: number;
  phone?: string;
  email?: string;
};

export interface IAuth {
  id?: string;
  message?: string;
  error?: string;
  token?: string;
}

export interface ICredential {
  username: string;
  password: string;
}
