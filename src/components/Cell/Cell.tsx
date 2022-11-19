import "./Cell.scss";

enum CellType {
  Normal = "normal",
  Wall = "wall",
  Source = "source",
  target = "target",
  NormalVisited = "normal_visited",
}

interface Props {
  id: string;
  coord: { row: number; col: number };
  type?: CellType;
}

const Cell: React.FC<Props> = ({ id, type = CellType.Normal }) => {
  return (
    <div className={`cell cell_${type}`} />
  );
};

export default Cell;
