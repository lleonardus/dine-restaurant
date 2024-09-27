export { nameFormatter };

function nameFormatter(name) {
  return name
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
    .join(" ");
}
