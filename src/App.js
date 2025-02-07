import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
      <p>
        This react app was built by Ruta Baumane and is open-sourced on
        <a
          href="https://github.com/Ruta-B/test-react-a"
          target="_blank"
          rel="noreferrer"
        >
          GitHub{" "}
        </a>
        ,{" "}
        <a
          href="https://react-test-weather-a.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify.
        </a>
      </p>
    </div>
  );
}

export default App;
