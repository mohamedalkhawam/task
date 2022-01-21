import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdClose } from "react-icons/md";
import { removeAlert } from "redux/actions/alert";
function Alert(props: any) {
  const dispatch = useDispatch();
  const [downloadTimer, setDownloadTimer] = useState(
    (props.alert.timeout - 1000) / 1000
  );
  useEffect(() => {
    const interval = setInterval(() => {
      if (downloadTimer >= 0) {
        setDownloadTimer((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.alert.timeout, downloadTimer]);

  return (
    <div
      role="alert"
      className={`flex ${
        downloadTimer < 1 ? "slide-out" : "slide-in"
      }  dark:bg-neutral-700 bg-neutral-700 my-1 items-center w-full h-12 p-3 text-gray-100 relative  rounded-md`}
    >
      <h2 className="font-mono text-xs text-gray-100">{props.alert.message}</h2>
      <div
        className={`h-2 transition-all ease-in-out duration-1000 w-full absolute bottom-0 appearance-none left-0 right-0 ${
          props.alert.status === "error"
            ? "dark:bg-red-400 bg-red-500"
            : "dark:bg-green-300 bg-green-400"
        } `}
        style={{ width: `${downloadTimer * 20}%` }}
        id={`progressBar-${props.alert.id}`}
        // value={downloadTimer}
      ></div>
      <button
        aria-label="close alert"
        className="absolute text-sm text-gray-100 cursor-pointer top-1 right-1"
        onClick={() => dispatch(removeAlert(props.alert.id))}
      >
        <MdClose />
      </button>
      {downloadTimer < 9 && (
        <span
          className={`absolute bottom-0 text-xs cursor-pointer right-1 text-white`}
        >
          {downloadTimer}
        </span>
      )}
    </div>
  );
}
type Reducer = {
  alertReducer?: any;
};
const Alerts = () => {
  const alertReducer = useSelector((state: Reducer) => state.alertReducer);

  return (
    <div
      style={{ zIndex: 9999 }}
      className={`fixed z-20 overflow-hidden overflow-y-auto top-10 right-3 w-72 ${
        alertReducer.filter((alert: any) => alert.priority === "high").length >
        0
          ? ""
          : "hidden"
      }`}
    >
      {alertReducer
        .filter((alert: any) => alert.priority === "high")
        .map((alert: any) => (
          <Alert key={alert.id} alert={alert}></Alert>
        ))}
    </div>
  );
};

export default Alerts;
