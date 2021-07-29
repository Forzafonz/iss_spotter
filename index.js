const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('184.147.114.219', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned latitude: ' , coordinates[0]);
//   console.log('It worked! Returned longtitude: ', coordinates[1])
// });

// fetchISSFlyOverTimes([42.9273, -79.3758], (error, passes) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned passes: ' , passes);
// });

// nextISSTimesForMyLocation((error, passTimes) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   }
//   // success, print out the deets!
//   console.log(passTimes);
// });

const printResults = function(err, data){
  if (err) {
    console.log("Something went wrong: ", error)
  } else {
    for (const pass of data) {
      let timestamp = pass['risetime'];
      let date = new Date(0);
      date.setUTCSeconds(pass['risetime'])
      console.log(`Next pass at ${date} for ${pass['duration']}`)
    }
  }
}


nextISSTimesForMyLocation(printResults);