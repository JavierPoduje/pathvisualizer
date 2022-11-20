import "./Button.scss";

interface Props {
  text: string;
  onClick: () => any;
  selected?: boolean;
}

const Button: React.FC<Props> = ({ text, onClick, selected = false }) => {
  return (
    <button
      className={`button ${selected ? "button_selected" : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
