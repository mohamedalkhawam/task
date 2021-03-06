import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import useColumns from "./utils/useColumns";
import HiddenColumns from "./hiddenColumns";
import { ObjectColumn } from "../../types/table/table";
import DarkModeSwitch from "../dark-mode-switcher.components";
import TableFooter from "./TableFooter";
type Props = {
  data: any[];
  tableColumns: ObjectColumn[];
  tableActions?: any;
  actionColumnTitle?: string;
  goTo: (currentpage: number) => void;
  totalpages: number;
};
export default function Table({
  data = [],
  tableColumns,
  tableActions,
  actionColumnTitle,
  goTo,
  totalpages,
}: Props) {
  const columns = useColumns(tableColumns);
  return (
    <div className={` table__container `}>
      <div className="w-full flex items-center justify-between py-4">
        <DarkModeSwitch />
        <HiddenColumns columns={columns} />
      </div>
      <div className=" w-full overflow-y-auto ">
        <table className="w-full">
          <TableHeader
            columns={columns}
            actionColumnTitle={actionColumnTitle}
          />
          <TableBody
            columns={columns}
            data={data}
            tableActions={tableActions}
          />
        </table>
      </div>
      <TableFooter goTo={goTo} totalpages={totalpages} />
    </div>
  );
}
