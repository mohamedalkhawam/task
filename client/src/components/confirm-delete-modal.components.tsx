import React, { useState } from "react";
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
  //   if (!id) {
  //     <div></div>;
  //   }
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
          className="w-32 py-1.5 text-lg font-semibold dark:text-gray-200 rounded-md text-gray-600 hover:shadow-none shadow-none dark:border-2 dark:border-transparent dark:hover:border-gray-200  border-2 border-transparent hover:border-gray-600"
          onClick={(e: any) => {
            setShowModal(false);
          }}
          type="button"
        />
        <Button
          loading={loading}
          title="Confirm"
          className="w-32 py-1.5 text-lg font-semibold dark:bg-red-400 bg-red-600 text-gray-200 dark:text-gray-200  rounded-md"
          onClick={deleteTrigger}
        />
      </div>
    </Model>
  );
};
export default ConfirmDelete;
