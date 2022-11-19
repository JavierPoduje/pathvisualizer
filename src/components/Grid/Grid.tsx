import Cell from "../Cell/Cell";
import "./Grid.scss";

const ROWS = 38;
const COLS = 20;

const Grid = () => {
  return (
    <section className="grid">
      {new Array(ROWS)
        .fill(0)
        .map((_, row) =>
          new Array(COLS)
            .fill(0)
            .map((_, col) => <Cell key={`${row}-${col}`} id={`${row}-${col}`} coord={{ row, col }} />)
        )}
    </section>
  );
};

export default Grid;
