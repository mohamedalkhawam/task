import Button from "components/form/Button";
import Input from "components/form/Input";
import Modal from "components/Modal.components";
import { updateUser } from "redux/actions/users";
import { User } from "types/redux";
import { useDispatch, useSelector } from "react-redux";
import { inputs } from "./Inputs";
type Props = {
  setEditModal: (editModal: boolean) => void;
  editModal: boolean;
  formData: User;
  setFormData: (formData: User) => void;
};
export const EditUserModal = ({
  setEditModal,
  editModal,
  formData,
  setFormData,
}: Props): JSX.Element => {
  const checkIfValid = (): boolean => {
    return Object.entries(formData)
      .map(([key, val], index) => val !== "")
      .includes(false);
  };
  const dispatch = useDispatch();
  const usersReducer = useSelector(
    (state: { usersReducer: any }) => state.usersReducer
  );
  const handleSubmit = async (e: any) => {
    dispatch(updateUser(formData)).then(() => {
      setEditModal(false);
    });
  };
  return (
    <Modal
      modalClassName=" modal__responsive__width flex items-start justify-center"
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
          className="btn btn__cancel"
          onClick={(e: any) => {
            setEditModal(false);
          }}
          type="button"
        />
        <Button
          title="Save"
          aria-label="Save"
          className=" btn btn__save "
          onClick={handleSubmit}
          loading={usersReducer.loading}
          disabled={checkIfValid()}
        />
      </div>
    </Modal>
  );
};
