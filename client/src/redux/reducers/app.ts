import { TOGGLE_DARK_MODE } from "../types/app";
const initialState: { isDarkMode: boolean } = {
  isDarkMode: false,
};
function appReducer(state = initialState, action: { type: any; payload: any }) {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_DARK_MODE:
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
}
export default appReducer;
