import { SET_ALERT, REMOVE_ALERT } from "../types/alert";

const initialState: never[] = [];

function alertReducer(
  state = initialState,
  action: { type: any; payload: any }
) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(
        (alert: { id: number | string }) => alert.id !== payload
      );
    default:
      return state;
  }
}

export default alertReducer;
