import { ObjectColumn } from "../types/table/table";
export const userTableColumns: ObjectColumn[] = [
  { title: "ID", accessor: "id" },
  // { title: "_ID", accessor: "_id" },
  { title: "First Name", accessor: "first_name" },
  { title: "Last Name", accessor: "last_name" },
  { title: "Email", accessor: "email" },
];
