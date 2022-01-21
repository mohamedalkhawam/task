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
      className={` ${downloadTimer < 1 ? "slide-out" : "slide-in"} alert `}
    >
      <h2 className="alert__message">{props.alert.message}</h2>
      <div
        className={`alert__timeProgress ${
          props.alert.status === "error"
            ? "alert__timeProgress__error"
            : "alert__timeProgress__success"
        } `}
        style={{ width: `${downloadTimer * 20}%` }}
        id={`progressBar-${props.alert.id}`}
        // value={downloadTimer}
      ></div>
      <button
        aria-label="close alert"
        className="alert__btn__close"
        onClick={() => dispatch(removeAlert(props.alert.id))}
      >
        <MdClose />
      </button>
      {downloadTimer < 9 && (
        <span className={`alert__countdown`}>{downloadTimer}</span>
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
      className={` alert__container ${
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
