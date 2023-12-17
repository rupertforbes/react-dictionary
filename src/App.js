import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="logo" alt="dictionary logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center mt-4">
          <a href="https://github.com/rupertforbes/react-dictionary">
            Open source code
          </a>{" "}
          by Rupert Forbes
        </footer>
      </div>
    </div>
  );
}

export default App;
