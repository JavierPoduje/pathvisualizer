import "./Button.scss";

interface Props {
  text: string;
  onClick: () => any;
}

const Button: React.FC<Props> = ({ text, onClick }) => {
  return <button className="button" onClick={onClick}>{text}</button>;
};

export default Button;
