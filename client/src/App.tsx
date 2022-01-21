import "./App.css";
import Table from "./components/table";
import { userTableColumns } from "./table-columns/users-listing";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, readUsers } from "./redux/actions/users";
import { toggleDarkMode } from "redux/actions/app";
import ConfirmDelete from "components/confirm-delete-modal.components";
import Alerts from "components/Alert.component";
import { userTableActions } from "table-actions/users-table";
import { User } from "./types/redux";
import { EditUserModal } from "./components/modules/users/edit-modal.users";
function App(): JSX.Element {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<User>({
    first_name: "",
    last_name: "",
    email: "",
    id: "",
  });
  const usersReducer = useSelector(
    (state: { usersReducer: any }) => state.usersReducer
  );
  const { isDarkMode } = useSelector(
    (state: { appReducer: any }) => state.appReducer
  );
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  useEffect(() => {
    dispatch(readUsers());
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      dispatch(toggleDarkMode());
    }
  }, []);

  const handleDelete = async (id: string | number) => {
    dispatch(deleteUser(id)).then(() => {
      setDeleteModal(false);
    });
  };

  return (
    <main
      className={`w-auto dark:bg-[#e5e5e5] min-h-screen  ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <section className="w-full px-2 sm:px-5 flex items-start justify-center">
        <Table
          tableColumns={userTableColumns}
          data={usersReducer.users || []}
          tableActions={userTableActions({
            setDeleteModal,
            setFormData,
            setEditModal,
          })}
          actionColumnTitle="Action"
          goTo={(currentPage: number) =>
            dispatch(readUsers(Number(currentPage)))
          }
          totalpages={usersReducer.totalPages}
        />
      </section>
      <ConfirmDelete
        setShowModal={setDeleteModal}
        deleteTrigger={() => handleDelete(String(formData._id))}
        showModal={deleteModal}
        loading={usersReducer.loading}
        body={`Are you sure you want to delete "${formData.first_name} ${formData.last_name}"?`}
        header={"Delete User"}
      />
      <EditUserModal
        setEditModal={setEditModal}
        editModal={editModal}
        formData={formData}
        setFormData={setFormData}
      />
      <Alerts />
    </main>
  );
}
export default App;
