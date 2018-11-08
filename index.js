// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver){
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver() {
  return driversWithRevenueOver(drivers, revenue)
  .map(function(driver))
}