import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("");
  const [showInfo, setShowInfo] = useState([]);

  useEffect(() => {
    weatherInfo();
  }, []);

  const handleclick = () => {
    const newInfo = [...showInfo, city];
    setShowInfo(newInfo);
    console.log(setShowInfo)
    setCity("");
  };

  const inputChanging = (e) => {
    setCity(e.target.value);
  };

  const weatherInfo = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=04f917a77433e8f5005224d17da7dcda`
    );
    setShowInfo(response.data.data);
  };
  // console.log(weatherInfo);

  return (
    <div className="App">
      <input type="text" onChange={inputChanging} value={city} />
      <button onClick={handleclick}>city</button>
      <div>{showInfo}</div>
    </div>
  );
}

export default App;
