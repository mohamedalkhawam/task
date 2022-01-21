import axios, { AxiosResponse } from "axios";
import { setAlert } from "../actions/alert";
import { v4 as uuidv4 } from "uuid";
import { CrudGetProps } from "@/types/redux";

const startInsideReload =
  (title: string) => (dispatch: (arg0: { type: string }) => void) => {
    dispatch({ type: `START_${title.toUpperCase()}S_RELOAD` });
  };

const finishedInsideReload =
  (title: string) => (dispatch: (arg0: { type: string }) => void) => {
    dispatch({ type: `FINISHED_${title.toUpperCase()}S_RELOAD` });
  };

export const get = ({
  headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  title = "",
  successType = `READ_${title.toUpperCase()}S`,
  errorType = `${title.toUpperCase()}_ERROR`,
  startReload = startInsideReload,
  finishedReload = finishedInsideReload,
  url,
  noReload = false,
}: CrudGetProps) => {
  return async (dispatch: any) => {
    const onSuccess = (success: AxiosResponse<any, any>) => {
      dispatch({
        type: successType,
        payload: success.data,
      });

      dispatch(
        setAlert({
          message: `${title}s successfully fetched`,
          status: "success",
          priority: "low",
        })
      );
      !noReload && dispatch(finishedReload(title));
      return success;
    };
    const onError = (error: any) => {
      dispatch({
        type: errorType,
        payload: {
          type: successType,
          date: new Date(),
          id: uuidv4(),
        },
      });

      if (!error.response) {
        dispatch(
          setAlert({
            message: `error: Something Wrong!`,
            status: "error",
            priority: "high",
          })
        );
        !noReload && dispatch(finishedReload(title));

        return error;
      } else if (
        (typeof error.response.data === "string" &&
          error.response.data.includes("<!DOCTYPE html>")) ||
        (typeof error.response.data === "string" &&
          error.response.data.includes("<html>"))
      ) {
        dispatch(
          setAlert({
            message: `error: Something Wrong!`,
            status: "error",
            priority: "high",
          })
        );
        !noReload && dispatch(finishedReload(title));

        return error;
      } else {
        Object.entries(error.response.data)
          .map(([k, v]) => {
            return { [k]: Array.isArray(v) ? v[0] : v };
          })
          .map((alert) => {
            dispatch(
              setAlert({
                message: Object.keys(alert) + ": " + Object.values(alert),
                status: "error",
                priority: "high",
              })
            );
          });
        !noReload && dispatch(finishedReload(title));
        return error;
      }
    };
    try {
      !noReload && dispatch(startReload(title));
      const success = await axios.get(url, {
        headers: headers,
      });
      return onSuccess(success);
    } catch (error) {
      return onError(error);
    }
  };
};
