const { fetchMyIP, fetchCoordsByIP, nextISSTimesForMyLocation, fetchISSFlyOverTimes } = require("./iss_promised");
const simulateError = () => {
  throw new Error("This is a simulated error!");
};
fetchMyIP()
  .then(fetchCoordsByIP)
  .then(simulateError) // This will trigger an error
  .then(fetchISSFlyOverTimes)
  .then(body => console.log(body))
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });;



nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

