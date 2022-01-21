import {
  READ_USERS,
  READ_ONE_USER,
  UPDATE_USER,
  DELETE_USER,
  START_USERS_RELOAD,
  FINISHED_USERS_RELOAD,
  USERS_ERROR,
  MANIPULATE_USER_REDUCER,
} from "../types/users";

const initialState = {
  users: [],
  user: {},
  loading: false,
  readable: false,
  totalPages: 0,
  error: [],
};

function usersReducer(
  state = initialState,
  action: { type: any; payload: any }
) {
  const { type, payload } = action;

  switch (type) {
    case MANIPULATE_USER_REDUCER:
      return {
        ...state,
        [payload.key]: payload.value,
      };
    case READ_USERS:
      console.log({ ddddd: payload?.users });
      return {
        ...state,
        users: payload?.users ?? [],
        totalPages: payload.totalPages,
      };

    case READ_ONE_USER:
      return { ...state, user: payload?.data ?? {} };

    case UPDATE_USER:
      return {
        ...state,
        users: [
          ...state.users.map((user: { _id?: string | number }) =>
            user?._id === payload.data._id ? payload.data : user
          ),
        ],
      };

    case DELETE_USER:
      console.log({ payload });
      return {
        ...state,
        users: state.users.filter(
          (user: { _id?: string | number }) => user?._id !== payload
        ),
      };

    case START_USERS_RELOAD:
      return {
        ...state,
        loading: true,
      };

    case FINISHED_USERS_RELOAD:
      return {
        ...state,
        loading: false,
      };
    case USERS_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
}

export default usersReducer;
