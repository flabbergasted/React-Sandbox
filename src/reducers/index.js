import { ADD_CLICK } from "../constants/action_types";

const initialState = {
    clicks: [1, 2]
  };
  function rootReducer(state = initialState, action) {
      if(action.type === ADD_CLICK){
          return Object.assign({}, state, {
            clicks: state.clicks.concat(state.clicks.length + 1)
          });
      }
    return state;
  };
  export default rootReducer;