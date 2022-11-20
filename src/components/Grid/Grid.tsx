import { useContext } from "react";
import { Context } from "../../context/Context";
import { ActionsEnum } from "../../context/reducer";
import Cell from "../Cell/Cell";
import "./Grid.scss";

const ROWS = 20;
const COLS = 44;

const Grid = () => {
  const { dispatch } = useContext(Context);

  const onMouseUp = () => {
    dispatch({ type: ActionsEnum.SetAsWallOnMouseEnter, payload: false });
    dispatch({ type: ActionsEnum.SetAsNormalOnMouseEnter, payload: false });
  };

  return (
    <section className="grid-container" onMouseUp={onMouseUp}>
      <div className="grid">
        {new Array(ROWS).fill(0).map((_, row) =>
          new Array(COLS).fill(0).map((_, col) => {
            return (
              <Cell
                key={`${row}-${col}`}
                coord={{ row, col }}
              />
            );
          })
        )}
      </div>
    </section>
  );
};

export default Grid;
