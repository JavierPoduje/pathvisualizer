import { ActionMap, ClickMode } from "./types";
import { State } from "./Context";
import { setClickMode, setTarget, setSource } from "./actions";

export enum ActionsEnum {
  SetClickMode,
  SetSource,
  SetTarget,
}

type PayloadType = {
  [ActionsEnum.SetClickMode]: ClickMode;
  [ActionsEnum.SetSource]: string;
  [ActionsEnum.SetTarget]: string;
};

export type ContextActions =
  ActionMap<PayloadType>[keyof ActionMap<PayloadType>];

export const contextReducer = (state: State, action: ContextActions) => {
  switch (action?.type) {
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
