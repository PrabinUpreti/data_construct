import { IEmployee } from "@/@types";
import { BASE_URL, ENDPOINT } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employeeApi = createApi({
  reducerPath: "employee",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  endpoints: (build) => ({
    getEmployees: build.query({
      query: () => "users",
    }),

    getEmployee: build.query({
      query: (id) => `users/${id}`,
    }),

    addEmployee: build.mutation({
      query: (body) => ({
        url: `users`,
        method: `POST`,
        body,
      }),
    }),
  }),
});

export const {
  useGetEmployeesQuery,
  useGetEmployeeQuery,
  useAddEmployeeMutation,
} = employeeApi;
