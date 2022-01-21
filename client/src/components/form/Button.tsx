type PropsType = {
  title?: string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  icon?: JSX.Element;
  [rest: string]: any;
};
const Button: React.FC<PropsType> = ({
  title,
  loading,
  disabled,
  className,
  icon,
  ...rest
}) => {
  return (
    <button
      {...rest}
      disabled={disabled || loading}
      className={`dark:bg-opacity-90  bg-opacity-80 hover:bg-opacity-100 dark:hover:bg-opacity-100 outline-none focus:outline-none shadow hover:shadow-md dark:disabled:bg-gray-500 disabled:bg-gray-500 dark:disabled:cursor-not-allowed  disabled:cursor-not-allowed   capitalize ${
        icon ? `flex justify-around items-center gap-2` : ``
      } ${className}`}
    >
      {icon && !loading ? icon : ""}
      {loading ? (
        <div className="flex items-center justify-center w-full h-full px-10 ">
          <div className="w-6 h-6 border-4 rounded-full border-t-gray-500 animate-spin"></div>
        </div>
      ) : (
        title
      )}
    </button>
  );
};

export default Button;
