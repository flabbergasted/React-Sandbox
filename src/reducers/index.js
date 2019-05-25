import { ADD_CLICK } from "../constants/action_types";

const initialState = {
    clicks: []
  };
  /**
 * Applies the given action to the provided state.
 *
 * @param state A function that returns the next state tree, given the
 *   current state tree and the action to handle.
 *
 * @param [action] The action to be applied to the state parameter.
 * 
 * @returns The state of the application after the action has been applied.
 */
  function rootReducer(state = initialState, action) {
      if(action.type === ADD_CLICK){
          return Object.assign({}, state, {
            clicks: state.clicks.concat(state.clicks.length + 1)
          });
      }
    return state;
  };
  export default rootReducer;