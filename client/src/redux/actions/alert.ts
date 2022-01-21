import { v4 as uuidv4 } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "../types/alert";
type PayloadProps = {
  message: string;
  messages?: string[];
  status?: string;
  priority: string;
  timeout?: number;
  id?: string | number;
};
export const setAlert =
  ({
    message,
    messages = [],
    status,
    priority,
    timeout = 6000,
  }: PayloadProps) =>
  (
    dispatch: (arg0: { type: string; payload: string | PayloadProps }) => void
  ) => {
    const id = uuidv4();
    dispatch({
      type: SET_ALERT,
      payload: { message, messages, status, id, timeout, priority },
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  };
export const removeAlert =
  (payload: string | number) =>
  (dispatch: (arg0: { type: string; payload: string | number }) => void) => {
    dispatch({ type: REMOVE_ALERT, payload });
  };
