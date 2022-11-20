import { useTransition, useContext, useState } from "react";
import { Context } from "../../context/Context";
import { ActionsEnum } from "../../context/reducer";
import { ClickMode } from "../../context/types";
import "./Cell.scss";

export enum CellType {
  Normal = "normal",
  Wall = "wall",
  Source = "source",
  Target = "target",
  Visited = "visited",
}

interface Props {
  coord: { row: number; col: number };
}

const Cell: React.FC<Props> = ({ coord }) => {
  const { state, dispatch } = useContext(Context);
  const [type, setType] = useState(CellType.Normal);
  const [, startTransition] = useTransition();

  const onMouseDown = () => {
    switch (state?.clickMode) {
      case ClickMode.Wall:
        setType(CellType.Wall);
        startTransition(() => {
          dispatch({ type: ActionsEnum.SetAsWallOnMouseEnter, payload: true });
          dispatch({
            type: ActionsEnum.SetAsNormalOnMouseEnter,
            payload: false,
          });
          dispatch({
            type: ActionsEnum.AddWall,
            payload: `${coord.row}-${coord.col}`,
          });
        });
        break;
      case ClickMode.Normal:
        setType(CellType.Normal);
        startTransition(() => {
          dispatch({
            type: ActionsEnum.SetAsNormalOnMouseEnter,
            payload: true,
          });
          dispatch({ type: ActionsEnum.SetAsWallOnMouseEnter, payload: false });
          dispatch({
            type: ActionsEnum.RemoveWall,
            payload: `${coord.row}-${coord.col}`,
          });
        });
        break;
      case ClickMode.Source:
        setType(CellType.Source);
        startTransition(() => {
          dispatch({
            type: ActionsEnum.SetSource,
            payload: `${coord.row}-${coord.col}`,
          });
        });
        break;
      case ClickMode.Target:
        setType(CellType.Target);
        startTransition(() => {
          dispatch({
            type: ActionsEnum.SetTarget,
            payload: `${coord.row}-${coord.col}`,
          });
        });
        break;
    }
  };

  const onMouseEnter = () => {
    if (state?.setAsWallOnMouseEnter) {
      setType(CellType.Wall);
      startTransition(() => {
        dispatch({
          type: ActionsEnum.AddWall,
          payload: `${coord.row}-${coord.col}`,
        });
      });
    } else if (state?.setAsNormalOnMouseEnter) {
      setType(CellType.Normal);
      startTransition(() => {
        dispatch({
          type: ActionsEnum.RemoveWall,
          payload: `${coord.row}-${coord.col}`,
        });
      });
    }
  };

  const cellType = () => {
    if (state?.source === `${coord.row}-${coord.col}`) {
      return "source";
    } else if (state?.target === `${coord.row}-${coord.col}`) {
      return "target";
    } else {
      return type;
    }
  };

  return (
    <button
      className={`cell cell_${cellType()}`}
      onClick={onMouseDown}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
    />
  );
};

export default Cell;
