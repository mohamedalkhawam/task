import { Column } from "../../types/table/table";
import Popup from "../Popup.components";
import { IoSettingsOutline } from "react-icons/io5";
import { BiShow, BiHide } from "react-icons/bi";
type Props = {
  columns: Column[];
};
export default function hiddenColumns({ columns }: Props) {
  return (
    <Popup
      icon={
        <IoSettingsOutline className="text-xl dark:text-white text-gray-500 transform transition-transform hover:rotate-180 duration-300" />
      }
      listClassname="text-left bg-gray-200  -top-1 w-auto right-7 rounded-md"
    >
      <ul
        role="menuitem"
        className="w-32 dark-bg-gray-700 bg-white  shadow-md hover:shadow-lg "
      >
        {columns.map((column: Column) => (
          <li
            key={column.accessor}
            onClick={() => column.toggle()}
            className={` flex justify-between items-center cursor-pointer px-3 py-1.5 border-b text-xs sm:text-sm text-gray-600 font-semibold  hover:bg-gray-100 `}
          >
            {column.title}
            {column.isVisible ? <BiHide /> : <BiShow />}
          </li>
        ))}
      </ul>
    </Popup>
  );
}
