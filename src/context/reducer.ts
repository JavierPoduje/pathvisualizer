import { ActionMap } from "./types";
import { State } from "./Context";
import { setTarget, setSource } from "./actions";

export enum ActionsEnum {
  SetSource,
  SetTarget,
}

type PayloadType = {
  [ActionsEnum.SetSource]: string;
  [ActionsEnum.SetTarget]: string;
};

export type ContextActions =
  ActionMap<PayloadType>[keyof ActionMap<PayloadType>];

export const contextReducer = (state: State, action: ContextActions) => {
  switch (action?.type) {
    case ActionsEnum.SetTarget:
      return setTarget(action?.payload, state);
    case ActionsEnum.SetSource:
      return setSource(action?.payload, state);
    default:
      return state;
  }
};
