import { FiEdit } from "react-icons/fi";
import { RiDeleteBin7Line } from "react-icons/ri";
type TableAction = {
  title: string;
  action: (row: any) => JSX.Element;
};
type PropsType = {
  setFormData: (user: any) => void;
  setEditModal: (value: boolean) => void;
  setDeleteModal: (value: boolean) => void;
};
export const userTableActions = ({
  setFormData,
  setEditModal,
  setDeleteModal,
}: PropsType): TableAction[] => [
  {
    title: "Edit",
    action(row: any) {
      return (
        <button
          onClick={async () => {
            setFormData(row);
            setEditModal(true);
          }}
          aria-label="Edit"
          className="transition-transform transform hover:scale-125 duration-300"
        >
          <FiEdit className="text-blue-600 dark:text-blue-400 text-lg  " />
        </button>
      );
    },
  },
  {
    title: "Delete",
    action(row: any) {
      return (
        <button
          aria-label="Delete"
          onClick={() => {
            setDeleteModal(true);
            setFormData(row);
          }}
          className="transition-transform transform hover:scale-125 duration-300"
        >
          <RiDeleteBin7Line className="text-red-600 dark:text-red-400  text-lg " />
        </button>
      );
    },
  },
];
