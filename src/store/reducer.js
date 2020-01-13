import {ADD_TASK, DELETE_TASK, RECEIVE_DATA, REQUEST_DATA, MARK_COMPLETED} from "./actions";

const initialState = {
  tasks: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {...state, loading: true};
    case RECEIVE_DATA:
      return {...state, tasks: action.data, loading: false};
    default:
          return state
  }
};

export default reducer;