import { Provider } from "./context/Context";
import Navbar from './components/Navbar/Navbar';
import Grid from './components/Grid/Grid';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Provider>
        <Navbar />
        <Grid />
      </Provider>
    </div>
  );
}

export default App;
