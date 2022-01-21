import { Column } from "../../types/table/table";
type Props = {
  columns: Column[];
  data: any[];
  tableActions?: any;
};
export default function TableBody({ columns, data = [], tableActions }: Props) {
  const checkHidden = (key: string): boolean => {
    return (
      columns.find((column: Column) => column.accesor === key)?.isVisible !==
      true
    );
  };
  return (
    <>
      <tbody>
        {data.map((item) => (
          <tr
            key={item._id}
            className="dark:odd:bg-[#FFF] dark:odd:bg-opacity-5 odd:bg-gray-100 text-xs sm:text-sm xl:text-lg   "
          >
            {Object.entries(item).map(([key, val]: any) => (
              <td
                hidden={checkHidden(key)}
                key={key === "_id" ? val : val + key}
                className="dark:text-gray-300 text-gray-600 leading-10  "
              >
                {val}
              </td>
            ))}
            <td className=" w-28 flex justify-center items-center gap-4 leading-10 ">
              {tableActions.map((element: any) => (
                <div key={element.title} className="pt-1">
                  {element.action(item)}
                </div>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
}
