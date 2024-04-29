function updateTime() {

let osloElement = document.querySelector("#oslo");
let osloDateElement = osloElement.querySelector(".date");
let osloTimeElement = osloElement.querySelector(".time");
let osloTime = moment().tz("Europe/Oslo");
osloDateElement.innerHTML = moment().format("MMMM, Do YYYY");
osloTimeElement.innerHTML = osloTime.format("H:mm:ss");

let HoustonElement = document.querySelector("#houston");
let HoustonDateElement = HoustonElement.querySelector(".date");
let HoustonTimeElement = HoustonElement.querySelector(".time");
let HoustonTime = moment().tz("America/Denver");
HoustonDateElement.innerHTML = moment().format("MMMM, Do YYYY");
HoustonTimeElement.innerHTML = HoustonTime.format("H:mm:ss");
};
updateTime();
setInterval(updateTime, 1000)