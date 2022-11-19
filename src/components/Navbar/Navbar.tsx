import "./Navbar.scss";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <nav className="main">
      <h2 className="appName">Path Visualizer</h2>
      <div className={"buttons"}>
        <Button
          text={"source"}
          onClick={() => console.log("`destination` button clicked")}
        />
        <Button
          text={"destination"}
          onClick={() => console.log("`destination` button clicked")}
        />
        <Button
          text={"wall"}
          onClick={() => console.log("`wall` button clicked")}
        />
        <Button
          text={"Run"}
          onClick={() => console.log("`Run` button clicked")}
        />
      </div>
    </nav>
  );
};

export default Navbar;
