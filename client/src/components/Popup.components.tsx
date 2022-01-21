import React, { useState } from "react";
type PropsType = {
  children: JSX.Element;
  icon: JSX.Element;
  listClassname?: string;
  itemClassName?: string;
};
const Popup: React.FC<PropsType> = ({ children, icon, listClassname }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      aria-haspopup="true"
      aria-hidden={`${!showMenu}`}
      className="relative select-none w-auto"
    >
      <button
        aria-label="open table settings"
        onClick={() => setShowMenu(!showMenu)}
        className="flex justify-start items-center cursor-pointer "
      >
        {icon}
      </button>
      <div
        className={`${
          showMenu ? "" : "hidden"
        } absolute z-20  rounded-md ${listClassname}`}
      >
        {children}
      </div>
    </div>
  );
};
export default Popup;
