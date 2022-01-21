import { Column } from "../../types/table/table";
type Props = {
  columns: Column[];
  actionColumnTitle?: string;
};
export default function TableHeader({ columns, actionColumnTitle }: Props) {
  return (
    <>
      <thead>
        <tr>
          {columns.map((item: Column) => (
            <th
              className=" text-left dark:text-gray-300 text-gray-600 text-xs sm:text-sm lg:text-lg "
              key={item.accesor}
              hidden={!item.isVisible}
            >
              {item.title}
            </th>
          ))}
          <th className="  w-28 dark:text-gray-300 text-gray-600  text-xs sm:text-sm lg:text-lg ">
            {actionColumnTitle ?? ""}
          </th>
        </tr>
      </thead>
    </>
  );
}
