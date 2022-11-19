import Cell from "../Cell/Cell";
import "./Grid.scss";

const ROWS = 20;
const COLS = 44;

const Grid = () => {
  return (
    <section className="grid-container">
      <div className="grid">
        {new Array(ROWS)
        .fill(0)
        .map((_, row) =>
          new Array(COLS)
          .fill(0)
          .map((_, col) => <Cell key={`${row}-${col}`} id={`${row}-${col}`} coord={{ row, col }} />)
        )}
      </div>
    </section>
  );
};

export default Grid;
