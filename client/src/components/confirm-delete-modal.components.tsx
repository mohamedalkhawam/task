import Model from "components/Modal.components";
import Button from "components/form/Button";
type PropsType = {
  setShowModal: (id: boolean) => void;
  showModal: boolean;
  id?: string | number;
  deleteTrigger: () => void;
  loading?: boolean;
  header?: string;
  body?: string;
};
const ConfirmDelete: React.FC<PropsType> = ({
  setShowModal,
  showModal,
  deleteTrigger,
  loading,
  body,
  header,
}) => {
  return (
    <Model
      show={showModal}
      modalClassName="w-auto"
      closeIconClassName="text-gray-600 dark:text-gray-300 text-lg"
      onClose={(e) => {
        setShowModal(false);
      }}
    >
      <h1 className="font-semibold text-lg dark:text-gray-300 text-gray-600">
        {header}
      </h1>
      <div className=" dark:text-gray-300 text-gray-600 py-5 ">{body}</div>
      <div className="flex items-center justify-around gap-5 py-2">
        <Button
          title="Cancel"
          className="btn btn__cancel"
          onClick={(e: any) => {
            setShowModal(false);
          }}
          type="button"
        />
        <Button
          loading={loading}
          title="Delete"
          className="btn  btn__delete "
          onClick={deleteTrigger}
        />
      </div>
    </Model>
  );
};
export default ConfirmDelete;
