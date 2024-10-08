export { nameFormatter, dateFormatter, twoDigitsNumberFormatter };

function nameFormatter(name) {
  return name
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function dateFormatter(date) {
  const formattedDate = date.toLocaleDateString("en-US");
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return `${formattedDate} at ${formattedTime.toLowerCase()}`;
}

function twoDigitsNumberFormatter(inputValue) {
  const number = Number.parseInt(inputValue);
  return number < 10 ? `0${number}` : number;
}
