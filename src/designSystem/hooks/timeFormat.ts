export const convertTo12HourFormat = (time24: string): string => {
  const [hours, minutes] = time24.split(":");
  const intHours = parseInt(hours, 10);
  const ampm = intHours >= 12 ? "PM" : "AM";
  const adjustedHours = intHours % 12 || 12; // Converts '0' to '12' for 12 AM
  return `${adjustedHours}:${minutes} ${ampm}`;
};

export const convertTimeToLocal = (timeWithOffset: string): string => {
  // Split the input into time and offset parts
  const [time, offset] = timeWithOffset.split("+");

  if (!time || !offset) {
    throw new Error("Invalid time format");
  }

  const [hours, minutes, seconds] = time.split(":").map(Number);
  const [offsetHours, offsetMinutes] = offset
    .replace("z", "")
    .split(":")
    .map(Number);

  // Create a date object using the current date and the provided time
  const date = new Date();
  date.setUTCHours(hours - offsetHours, minutes - offsetMinutes, seconds);

  // Get the adjusted local time components
  let localHours = date.getHours();
  const localMinutes = date
    .getMinutes()
    .toString()
    .padStart(2, "0");
  const localSeconds = date
    .getSeconds()
    .toString()
    .padStart(2, "0");

  // Determine AM/PM and adjust hours for 12-hour format
  const period = localHours >= 12 ? "PM" : "AM";
  localHours = localHours % 12 || 12; // Convert 0 hours to 12 for 12-hour format

  // Return the formatted local time with AM/PM
  return `${localHours
    .toString()
    .padStart(2, "0")}:${localMinutes}:${localSeconds} ${period}`;
};
