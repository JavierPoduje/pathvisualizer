import React, { createContext, useReducer, Dispatch } from "react";
import { ContextActions, contextReducer } from "./reducer";
import { ClickMode } from "./types";

export type State = {
  clickMode: ClickMode;
  setAsWallOnMouseEnter: boolean;
  setAsNormalOnMouseEnter: boolean;
  seens: Set<string>; // cell id
  source?: string; // cell id
  target?: string; // cell id
  walls: Set<string>; // cell id
};

export const initialState: State = {
  clickMode: ClickMode.Source,
  setAsWallOnMouseEnter: false,
  setAsNormalOnMouseEnter: false,
  seens: new Set(),
  source: `0-0`,
  target: `19-43`, // TODO: this should be dynamic
  walls: new Set(),
};

const Context = createContext<{
  state: State;
  dispatch: Dispatch<ContextActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const reducer = (state: State, action: any) => contextReducer(state, action);

const Provider: React.FC<{ children?: React.ReactNode | undefined }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Provider, Context };
