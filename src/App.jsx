import "./App.css";
import CounterProvider from "./contexts/Counter-context";
import { Home } from "./components/pages";
function App() {
  return (
    <div className="App">
      APP
      <CounterProvider>
        <Home />
      </CounterProvider>
    </div>
  );
}

export default App;
