import { lensProp, set } from "ramda";
import { State } from "./Context";

export const addWall = (payload: string, state: State) => {
  state?.walls.add(payload);
  return state;
};

export const removeWall = (payload: string, state: State) => {
  state?.walls.delete(payload);
  return state;
};

export const setAsNormalOnMouseEnter = set(
  lensProp<State>("setAsNormalOnMouseEnter")
);
export const setAsWallOnMouseEnter = set(
  lensProp<State>("setAsWallOnMouseEnter")
);
export const setClickMode = set(lensProp<State>("clickMode"));
export const setSource = set(lensProp<State>("source"));
export const setTarget = set(lensProp<State>("target"));
