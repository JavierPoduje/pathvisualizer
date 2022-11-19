import { useContext } from "react";
import { Context } from "../../context/Context";
import Cell, { CellType } from "../Cell/Cell";
import "./Grid.scss";

const ROWS = 20;
const COLS = 44;

const Grid = () => {
  const { state } = useContext(Context);

  const cellType = (row: number, col: number): CellType => {
    const id = `${row}-${col}`;

    if (id === state?.source) return CellType.Source;
    else if (id === state?.target) return CellType.Target;
    else if (state?.walls.has(id)) return CellType.Wall;
    else if (state?.seens.has(id)) return CellType.Visited;
    else return CellType.Normal;
  };

  return (
    <section className="grid-container">
      <div className="grid">
        {new Array(ROWS).fill(0).map((_, row) =>
          new Array(COLS).fill(0).map((_, col) => {
            return (
              <Cell
                key={`${row}-${col}`}
                coord={{ row, col }}
                type={cellType(row, col)}
              />
            );
          })
        )}
      </div>
    </section>
  );
};

export default Grid;
