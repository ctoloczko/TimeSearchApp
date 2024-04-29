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
}

updateMyLocation();
setInterval(updateMyLocation, 1000);
