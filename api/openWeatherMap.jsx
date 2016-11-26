const axios = require('axios');

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=94b6558aff863cd72466b81c280d75fa&unit=imperial";

// 94b6558aff863cd72466b81c280d75fa
// http://api.openweathermap.org/data/2.5/weather?q=London,uk&unit=imperial&appid=94b6558aff863cd72466b81c280d75fa
module.exports = {
    getTemp: function (location) {

            const encodedLocation = encodeURIComponent(location);
            const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
            return axios(requestUrl)
                .then(function (response) {
                    const isValid = response.data.cod;

                    if (!isValid) {
                        throw new Error(response.data);
                    }

                    return response.data.main.temp;
                })
                .catch(function (error) {
                    console.log(error)
                    throw new Error('not found city');
                })

    }
}