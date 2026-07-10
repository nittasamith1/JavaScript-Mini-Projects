const weatherForm = document.querySelector(".weatherForm");
const card = document.querySelector(".card");
const cityInput = document.querySelector(".cityInput");

const apiKey = "92ea90c273a9409052e554ce69d324c1";

weatherForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (!city) {
        displayErrorMsg("Please enter a city name.");
        return;
    }

    try {
        const weatherData = await getWeatherData(city);
        displayWeatherData(weatherData);
        cityInput.value = "";
    } catch (error) {
        console.error(error);
        displayErrorMsg(error.message);
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("City not found!");
    }

    return await response.json();
}

function displayWeatherData(data) {

    const {
        name: city,
        main: { temp, humidity },
        weather: [{ description }]
    } = data;

    card.innerHTML = "";
    card.style.display = "flex";

    const displayCity = document.createElement("p");
    const displayTemp = document.createElement("p");
    const displayHumidity = document.createElement("p");
    const displayDescription = document.createElement("p");

    displayCity.textContent = city;
    displayTemp.textContent = `${temp.toFixed(1)}°C`; // Already Celsius
    displayHumidity.textContent = `Humidity: ${humidity}%`;
    displayDescription.textContent =
        description.charAt(0).toUpperCase() + description.slice(1);

    displayCity.classList.add("DisplayCity");
    displayTemp.classList.add("DisplayTemp");
    displayHumidity.classList.add("DisplayHumidity");
    displayDescription.classList.add("DisplayOvercast");

    card.append(
        displayCity,
        displayTemp,
        displayHumidity,
        displayDescription
    );
}

function displayErrorMsg(message) {
    card.innerHTML = "";
    card.style.display = "flex";

    const displayError = document.createElement("p");
    displayError.textContent = message;
    displayError.classList.add("DisplayError");

    card.appendChild(displayError);
}