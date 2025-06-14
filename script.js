async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const apiKey = 'bac68a06b9c64f05083f69d321158483'; 
    if (!city) {
      alert("Oops! Please enter a city name.");
      return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found. Try again!");
      const data = await response.json();
      document.getElementById("weatherResult").innerHTML = `
        <h2>📍 ${data.name}, ${data.sys.country}</h2>
        <p><strong>🌡 Temperature:</strong> ${data.main.temp}°C</p>
        <p><strong>🌤 Condition:</strong> ${data.weather[0].main}</p>
        <p><strong>💧 Humidity:</strong> ${data.main.humidity}%</p>
      `;
    } catch (error) {
      document.getElementById("weatherResult").innerHTML = `<p>${error.message}</p>`;
    }
  }
  
