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

const Cell: React.FC<Props> = ({ type = CellType.Normal }) => {
  return (
    <div className={`cell cell_${type}`} />
  );
};

export default Cell;
