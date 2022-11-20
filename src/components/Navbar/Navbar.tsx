import { useContext } from "react";
import "./Navbar.scss";
import Button from "../Button/Button";
import { Context } from "../../context/Context";
import { ClickMode } from "../../context/types";
import { ActionsEnum } from "../../context/reducer";

const Navbar = () => {
  const { state, dispatch } = useContext(Context);

  console.log("Navbar#state?.clickMode: ", state?.clickMode);

  return (
    <nav className="main">
      <h2 className="appName">
        <em>Path Visualizer</em>
      </h2>
      <div className={"buttons"}>
        <Button
          text={"source"}
          onClick={() =>
            dispatch({
              type: ActionsEnum.SetClickMode,
              payload: ClickMode.Source,
            })
          }
          selected={state?.clickMode === ClickMode.Source}
        />
        <Button
          text={"target"}
          onClick={() =>
            dispatch({
              type: ActionsEnum.SetClickMode,
              payload: ClickMode.Target,
            })
          }
          selected={state?.clickMode === ClickMode.Target}
        />
        <Button
          text={"wall"}
          onClick={() =>
            dispatch({
              type: ActionsEnum.SetClickMode,
              payload: ClickMode.Wall,
            })
          }
          selected={state?.clickMode === ClickMode.Wall}
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
