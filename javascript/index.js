function updateTime() {

let osloElement = document.querySelector("#oslo");
if (osloElement){
let osloDateElement = osloElement.querySelector(".date");
let osloTimeElement = osloElement.querySelector(".time");
let osloTime = moment().tz("Europe/Oslo");

osloDateElement.innerHTML = osloTime.format("MMMM, Do YYYY");
osloTimeElement.innerHTML = osloTime.format("H:mm:ss");
}

let denverElement = document.querySelector("#denver");
if (denverElement) {
let denverDateElement = denverElement.querySelector(".date");
let denverTimeElement = denverElement.querySelector(".time");
let denverTime = moment().tz("America/Denver");

denverDateElement.innerHTML = denverTime.format("MMMM Do YYYY");
denverTimeElement.innerHTML = denverTime.format("H:mm:ss");
}
}
function updateCity (event){
    let cityTimeZone = event.target.value;

    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }

    let cityName = cityTimeZone.replace ("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city" id=${cityName.toLowerCase()}>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            <div class="time">${cityTime.format("H:mm:ss")}</div>
        </div>
        <a href="/">All cities</a> `;
}

updateTime();
setInterval(updateTime, 1000);


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
