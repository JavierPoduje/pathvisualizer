export interface Coord {
  row: number;
  col: number;
}

export interface Cell {
  id: string,
  coord: Coord;
}

export enum ClickMode {
  Source,
  Target,
  Wall,
  Normal,
}

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};
