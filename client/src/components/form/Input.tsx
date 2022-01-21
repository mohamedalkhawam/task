import React, { ChangeEventHandler } from "react";
type PropsType = {
  type?: string;
  name: string;
  parentClassName?: string;
  inputClassName?: string;
  onChange: ChangeEventHandler;
  placeholder?: string;
  [rest: string]: any;
};
export default function Input(props: PropsType): JSX.Element {
  const {
    inputClassName = "",
    parentClassName = "",
    label = "",
    errorMessage = "",
    ...rest
  } = props;
  return (
    <div className={`w-auto  ${parentClassName}`}>
      {label && (
        <label className="dark:text-gray-300 text-gray-600 font-semibold ">
          {label}
          {props?.required && (
            <span className="dark:text-red-400 text-red-500 ">*</span>
          )}
          :
        </label>
      )}
      <input
        {...rest}
        className={` peer  w-full disabled:cursor-not-allowed ring-none dark:border-none invalid:ring-2 dark:invalid:ring-red-400  invalid:ring-red-500 dark:invalid:text-red-400 invalid:text-red-600 rounded-md  dark:bg-neutral-800  bg-gray-300 shadow  outline-none focus:outline-none h-11 p-1.5 dark:text-gray-200 text-gray-600  ${inputClassName}`}
      />
      <small
        className={`mb-2 peer-invalid:visible invisible dark:text-red-400  text-red-600 text-sm`}
      >
        {errorMessage}
      </small>
    </div>
  );
}
