export function convertUTCToLocalTime(utcTimeString: any) {
  const [hours, minutes, seconds] = utcTimeString.split(":");
  const date = new Date();
  date.setUTCHours(hours);
  date.setUTCMilliseconds(0); // Ensure milliseconds are reset to 0

  // Set minutes and seconds using UTC methods
  date.setUTCMinutes(minutes);
  date.setUTCSeconds(seconds);

  // Format the date to the local timezone without the timezone name
  const options: any = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };
  const formatter = new Intl.DateTimeFormat(undefined, options);
  const localTimeString = formatter.format(date);

  return localTimeString;
}
