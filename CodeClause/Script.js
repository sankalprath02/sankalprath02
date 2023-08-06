const apiKey = 'ee5ca86ce4cdfa56ed74da42ff09dc7e';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

function getWeather() {
    const city = document.getElementById('city').value;
    const apiUrl = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => displayWeather(data))
        .catch((error) => console.log('Error fetching weather data:', error));
}

function displayWeather(data) {
    if (data.cod === '404') {
        alert('City not found. Please enter a valid city name.');
    } else {
        const locationElement = document.getElementById('location');
        const temperatureElement = document.getElementById('temperature');
        const descriptionElement = document.getElementById('description');

        locationElement.textContent = `Location: ${data.name}, ${data.sys.country}`;
        temperatureElement.textContent = `Temperature: ${data.main.temp} °C`;
        descriptionElement.textContent = `Description: ${data.weather[0].description}`;
    }
}
