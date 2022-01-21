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
      className={`${show ? "" : "hidden"} modal__backdrop `}
    >
      <div className="relative flex items-center justify-center w-full h-full">
        <div className={` modal ${modalClassName ? modalClassName : "w-96"}`}>
          <div
            className={`flex flex-col w-full overflow-y-auto max-h-[34rem] `}
          >
            <div className={`absolute right-5 top-3 ${closeIconClassName}`}>
              <CgCloseO
                className="modal__icon__close"
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
