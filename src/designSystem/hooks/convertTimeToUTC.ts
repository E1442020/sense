export const convertTimeToUTC = (timeWithOffset: string): string => {
  // Split the input into time and offset parts
  const [time, offset] = timeWithOffset.split("+");

  if (!time || !offset) {
    throw new Error("Invalid time format");
  }

  const [hours, minutes, seconds] = time.split(":").map(Number);
  const [offsetHours, offsetMinutes] = offset
    // .replace("z", "")
    .split(":")
    .map(Number);

  // Create a date object using the current date and the provided time
  const date = new Date();
  date.setUTCHours(hours - offsetHours, minutes - offsetMinutes, seconds);

  // Get the adjusted UTC time components
  const utcHours = date
    .getUTCHours()
    .toString()
    .padStart(2, "0");
  const utcMinutes = date
    .getUTCMinutes()
    .toString()
    .padStart(2, "0");
  const utcSeconds = date
    .getUTCSeconds()
    .toString()
    .padStart(2, "0");

  // Return the formatted UTC time
  return `${utcHours}:${utcMinutes}:${utcSeconds}`;
};
