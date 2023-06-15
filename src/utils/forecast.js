const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=ea8a730017f221c7f52a61dc64303281&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("unable to connect to Weatherstack", undefined);
    } else if (body.error) {
      callback("unable to find location", undefined);
    } else {
      callback(
        undefined,
        `its current ${body.current.temperature} degree out. its feel like ${body.current.humidity} degree of`
      );
    }
  });
};

module.exports = forecast;
