export const convertTimeToTimezoneFormat = (time: string): string => {
  const [hours, minutes, seconds] = time.split(":").map(Number);

  // Create a date object using the current date and the provided time
  const date = new Date();
  date.setHours(hours, minutes, seconds);

  // Get the timezone offset in minutes and convert to hours
  const offsetInMinutes = date.getTimezoneOffset();
  const offsetInHours = offsetInMinutes / 60;
  const offsetSign = offsetInHours > 0 ? "-" : "+";
  const absoluteOffsetInHours = Math.abs(offsetInHours);

  // Format the offset in ±HH:MM format
  const offset = `${offsetSign}${String(absoluteOffsetInHours).padStart(
    2,
    "0"
  )}:00`;

  // Return the formatted time with the timezone offset
  return `${time}${offset}`;
};
