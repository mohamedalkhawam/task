import React from "react";
import { CgCloseO } from "react-icons/cg";
type PropsType = {
  show: boolean;
  onClose: (show?: boolean) => void;
  children?: any;
  modalClassName?: string;
  closeIconClassName?: string;
  height?: string;
  ModalHeader?: string;
};
const Modal: React.FC<PropsType> = ({
  show,
  onClose,
  children,
  modalClassName,
  closeIconClassName,
  ModalHeader,
}) => {
  return (
    <div
      aria-haspopup="true"
      aria-hidden={"true"}
      className={`${
        show ? "" : "hidden"
      } fixed top-0 bottom-0 left-0 right-0 w-full h-full  bg-[#121212] dark:bg-[#e5e5e5] dark:bg-opacity-40 bg-opacity-60  overflow-hidden`}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        <div
          className={`absolute py-3 bg-gray-200 dark:bg-[#121212]  px-5 shadow-lg rounded-lg  ${
            modalClassName ? modalClassName : "w-96"
          }`}
        >
          <div
            className={`flex flex-col w-full overflow-y-auto max-h-[34rem] `}
          >
            <div className={`absolute right-5 top-3 ${closeIconClassName}`}>
              <CgCloseO
                className="cursor-pointer hover:rotate-180 transition-transform transform duration-300 "
                onClick={() => onClose(show)}
                size="1.5rem"
              />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
