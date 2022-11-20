import { useContext } from "react";
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
  type?: CellType;
}

const Cell: React.FC<Props> = ({ coord, type = CellType.Normal }) => {
  const { state, dispatch } = useContext(Context);

  const onMouseDown = () => {
    switch (state?.clickMode) {
      case ClickMode.Wall:
        dispatch({ type: ActionsEnum.SetAsWallOnMouseEnter, payload: true });
        dispatch({ type: ActionsEnum.SetAsNormalOnMouseEnter, payload: false });
        dispatch({
          type: ActionsEnum.AddWall,
          payload: `${coord.row}-${coord.col}`,
        });
        break;
      case ClickMode.Normal:
        dispatch({ type: ActionsEnum.SetAsNormalOnMouseEnter, payload: true });
        dispatch({ type: ActionsEnum.SetAsWallOnMouseEnter, payload: false });
        dispatch({
          type: ActionsEnum.RemoveWall,
          payload: `${coord.row}-${coord.col}`,
        });
        break;
      case ClickMode.Source:
        dispatch({
          type: ActionsEnum.SetSource,
          payload: `${coord.row}-${coord.col}`,
        });
        break;
      case ClickMode.Target:
        dispatch({
          type: ActionsEnum.SetTarget,
          payload: `${coord.row}-${coord.col}`,
        });
        break;
    }
  };

  const onMouseUp = () => {
    if (state?.clickMode === ClickMode.Wall) {
      dispatch({ type: ActionsEnum.SetAsWallOnMouseEnter, payload: false });
    } else if (state?.clickMode === ClickMode.Normal) {
      dispatch({ type: ActionsEnum.SetAsNormalOnMouseEnter, payload: false });
    }
  };

  const onMouseEnter = () => {
    if (state?.setAsWallOnMouseEnter) {
      dispatch({
        type: ActionsEnum.AddWall,
        payload: `${coord.row}-${coord.col}`,
      });
    } else if (state?.setAsNormalOnMouseEnter) {
      dispatch({
        type: ActionsEnum.RemoveWall,
        payload: `${coord.row}-${coord.col}`,
      });
    }
  };

  return (
    <button
      className={`cell cell_${type}`}
      onClick={onMouseDown}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseEnter={onMouseEnter}
    />
  );
};

export default Cell;
