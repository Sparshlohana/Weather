// e7cab206f38642e789595138221808
// https://www.weatherapi.com/docs/#
document.getElementById('btn').addEventListener('click', () => {
    let query = document.getElementById('place').value;
    let box = document.getElementById('displayWeather');
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.weatherapi.com/v1/current.json?key=e7cab206f38642e789595138221808&q=${query}&aqi=no`, true);

    xhr.responseType = "json";

    xhr.onload = () => {
        if (xhr.status === 200) {
            let celsius = xhr.response.current.temp_c;
            let fahrenheit = xhr.response.current.temp_f;
            let state = xhr.response.location.region;
            let city = xhr.response.location.name;
            box.innerHTML = `<h1>Current whether in ${city}, ${state} is ${celsius}°C / ${fahrenheit}°F</h1>`
            console.log(celsius);
            console.log(xhr.response);
        } else {
            box.innerHTML = `<h1>Please Enter Valid Input</h1>`
            console.log(xhr.response);
        }
    }

    xhr.send();
})