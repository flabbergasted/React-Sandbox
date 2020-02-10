import { ADD_CLICK, REMOVE_CLICK } from "../constants/action_types";

export function addClick(payload) {
    return { type: ADD_CLICK, payload }
  };
  export function removeClick() {
    return { type: REMOVE_CLICK }
  };