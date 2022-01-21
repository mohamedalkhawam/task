import "./App.css";
import Table from "./components/table";
import { userTableColumns } from "./table-columns/users-listing";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, readUsers, updateUser } from "./redux/actions/users";
import { ToggleDarkMode } from "redux/actions/app";
import Model from "components/Modal.components";
import Input from "components/form/Input";
import Button from "components/form/Button";
import ConfirmDelete from "components/confirm-delete-modal.components";
import Alerts from "components/Alert.component";
import { userTableActions } from "table-actions/users-table";
import { User } from "./types/redux";
import { Inputs } from "./types/components/inputs";
let inputs: Array<Inputs> = [
  {
    name: "id",
    disabled: true,
    label: "ID",
    type: "text",
    placeholder: "11",
    errorMessage: "can't be changed",
    required: false,
  },
  {
    name: "first_name",
    disabled: false,
    placeholder: "Exp: Mohamed",
    label: "First Name",
    required: true,
    type: "text",
    errorMessage: "Please Enter a valid name",
  },
  {
    name: "last_name",
    disabled: false,
    placeholder: "Exp: Al-Khawam",
    label: "Last Name",
    required: true,
    type: "text",
    errorMessage: "Please Enter a valid name",
  },
  {
    name: "email",
    placeholder: "Exp: example@example.com",
    label: "Email",
    disabled: false,
    type: "email",
    pattern: `/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`,
    required: true,
    errorMessage: "Please enter a valid email address!",
  },
];
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
      dispatch(ToggleDarkMode());
    } else {
      dispatch(ToggleDarkMode());
    }
  }, []);

  const handleSubmit = async (e: any) => {
    dispatch(updateUser(formData)).then(() => {
      setEditModal(false);
    });
  };
  const handleDelete = async (id: string | number) => {
    dispatch(deleteUser(id)).then(() => {
      setDeleteModal(false);
    });
  };
  // if () {
  //   return <div className="bg-gray-900 w-screen h-screen"></div>;
  // }
  return (
    <main
      className={`w-auto dark:bg-[#e5e5e5] min-h-screen  ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <Alerts />
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
          goTo={(currentoage: number) =>
            dispatch(readUsers(Number(currentoage)))
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
      <Model
        modalClassName="w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 flex items-start justify-center"
        onClose={() => setEditModal(false)}
        show={editModal}
        closeIconClassName="text-gray-600 dark:text-gray-300 text-lg"
      >
        <h1 className="font-semibold text-lg dark:text-gray-300 text-gray-600">
          Edit User
        </h1>
        <div role="list" className="w-10/12 mx-auto my-10">
          {inputs.map((input) => (
            <Input
              key={input.name}
              {...input}
              onChange={(e: any) => {
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              value={formData?.[input.name]}
            />
          ))}
        </div>

        <div className="w-full flex items-center justify-end gap-4 py-2">
          <Button
            aria-label="cancel"
            title="Cancel"
            className="w-32 py-1.5 text-lg font-semibold dark:text-gray-200 rounded-md text-gray-600 hover:shadow-none shadow-none dark:border-2 dark:border-transparent dark:hover:border-gray-200  border-2 border-transparent hover:border-gray-600"
            onClick={(e: any) => {
              setEditModal(false);
            }}
            type="button"
          />
          <Button
            title="Save"
            aria-label="Save"
            className="w-32 py-1.5 text-lg font-semibold dark:bg-blue-400 bg-blue-600 text-gray-200 dark:text-gray-200  rounded-md"
            onClick={handleSubmit}
            loading={usersReducer.loading}
          />
        </div>
      </Model>
    </main>
  );
}
export default App;
