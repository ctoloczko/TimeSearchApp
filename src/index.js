function updateMyLocation(params) {
  let guessedCity = moment.tz.guess();
  let cityName = guessedCity.split("/")[1].replace("_", " ");
  let currentCityTime = moment.tz(guessedCity);
  let currentCityNameElement = document.querySelector("#current-city-name");
  let currentCityDateElement = document.querySelector("#current-city-date");
  let currentCityTimeElement = document.querySelector("#current-city-time");

  currentCityNameElement.innerHTML = cityName;
  currentCityDateElement.innerHTML = currentCityTime.format("dddd, MMM Do YY");
  currentCityTimeElement.innerHTML = currentCityTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  setInterval(updateMyLocation, 1000);
}

updateMyLocation();

function updateNewLocation(event) {
  let newCityTimeZone = event.target.value;
  let newCityName = newCityTimeZone.replace("_", " ").split("/")[1];
  newCityTimeZone = moment.tz(newCityTimeZone);
  let newCityDetailsElement = document.querySelector("#new-city-details");
  newCityDetailsElement.innerHTML = `<div class="city">${newCityName}</div> 
     
      <div class="date">${newCityTimeZone.format("dddd, MMM Do YY")}</div>
      <div class="time">${newCityTimeZone.format(
        "h:mm:ss [<small>]A[</small>]"
      )}</div>`;
  setTimeout(() => {
    updateNewLocation(event);
  }, 1000);
}

let citiesSelectElement = document.querySelector("#select-location");
citiesSelectElement.addEventListener("change", updateNewLocation);

updateNewLocation();
setInterval(updateNewLocation, 1000);
