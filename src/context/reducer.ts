import { ActionMap, ClickMode } from "./types";
import { State } from "./Context";
import {
  addWall,
  removeWall,
  setAsNormalOnMouseEnter,
  setAsWallOnMouseEnter,
  setClickMode,
  setTarget,
  setSource,
} from "./actions";

export enum ActionsEnum {
  AddWall,
  RemoveWall,
  SetAsNormalOnMouseEnter,
  SetAsWallOnMouseEnter,
  SetClickMode,
  SetSource,
  SetTarget,
}

type PayloadType = {
  [ActionsEnum.AddWall]: string;
  [ActionsEnum.RemoveWall]: string;
  [ActionsEnum.SetAsNormalOnMouseEnter]: boolean;
  [ActionsEnum.SetAsWallOnMouseEnter]: boolean;
  [ActionsEnum.SetClickMode]: ClickMode;
  [ActionsEnum.SetSource]: string;
  [ActionsEnum.SetTarget]: string;
};

export type ContextActions =
  ActionMap<PayloadType>[keyof ActionMap<PayloadType>];

export const contextReducer = (state: State, action: ContextActions) => {
  switch (action?.type) {
    case ActionsEnum.AddWall:
      return addWall(action?.payload,state);
    case ActionsEnum.RemoveWall:
      return removeWall(action?.payload,state);
    case ActionsEnum.SetAsNormalOnMouseEnter:
      return setAsNormalOnMouseEnter(action?.payload, state);
    case ActionsEnum.SetAsWallOnMouseEnter:
      return setAsWallOnMouseEnter(action?.payload, state);
    case ActionsEnum.SetClickMode:
      return setClickMode(action?.payload, state);
    case ActionsEnum.SetSource:
      return setSource(action?.payload, state);
    case ActionsEnum.SetTarget:
      return setTarget(action?.payload, state);
    default:
      return state;
  }
};
