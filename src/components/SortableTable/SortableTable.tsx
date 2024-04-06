import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

type Person = {
  name: string;
  age: number;
  email: string;
};

export const SortableTable = () => {
  const columns: ColumnDef<Person>[] = [
    //   {
    //     header: "Name",
    //     accessorKey: "name",
    //   },
    //   {
    //     header: "Age",
    //     accessorKey: "age",
    //   },
    //   {
    //     header: "Email",
    //     accessorKey: "email",
    //   },
  ];

  const data: Person[] = [
    // {
    //   name: "John Doe",
    //   age: 30,
    //   email: "john@doe.com",
    // },
    // {
    //   name: "Jane Doe",
    //   age: 25,
    //   email: "JANE@doe.com",
    // },
    // {
    //   name: "John Smith",
    //   age: 35,
    //   email: "josnsmith@gmail.com",
    // },
  ];
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log(table);
};
