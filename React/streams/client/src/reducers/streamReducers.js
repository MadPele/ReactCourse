import _ from "lodash";
import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STEAM,
  EDIT_STEAM
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    case EDIT_STEAM:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_STEAM:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
