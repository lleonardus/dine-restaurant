export { isDateAvailable, isTimeAvailable };

function isDateAvailable(date) {
  const now = new Date();

  return now.getTime() <= date.getTime();
}

function isTimeAvailable(date) {
  const isWeekend = date.getDay() === 0 || date.getDay() === 6;

  return (
    (isWeekend && isRestaurantOpened(date, 23, 30)) ||
    (!isWeekend && isRestaurantOpened(date, 22, 0))
  );
}

function isRestaurantOpened(date, closeHour, closeMinutes) {
  const openHour = 9;
  const openMinutes = 0;
  const currentHour = date.getHours();
  const currentMinutes = date.getMinutes();

  return (
    (currentHour > openHour ||
      (currentHour === openHour && currentMinutes >= openMinutes)) &&
    (currentHour < closeHour ||
      (currentHour === closeHour && currentMinutes <= closeMinutes))
  );
}
