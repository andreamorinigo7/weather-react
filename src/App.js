import Footer from "./Footer";
import "./style.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <Footer />
    </div>
  );
}

export default App;
