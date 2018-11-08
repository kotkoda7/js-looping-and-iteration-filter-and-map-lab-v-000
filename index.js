// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver){
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
  .map(function(driver) {
    return driver.name;
  });
}

function exactMatch(driver, value) {
  return drivers.filter(function(driver) {
    let matches = false;

    for (const key in value) {
      value = driver[key] === value[key];
    }

    return value;
  });
}

function exactMatchToList(drivers, value ) {
  
}