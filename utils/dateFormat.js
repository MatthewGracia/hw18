const addDateSuffix = (date) => {
  // Convert date to string
  let dateStr = date.toString();

  // Get the last character of the date string
  const lastChar = dateStr.charAt(dateStr.length - 1);

  // Add the appropriate suffix for the date
  switch (lastChar) {
    case '1':
      if (dateStr !== '11') {
        dateStr += 'st';
      }
      break;
    case '2':
      if (dateStr !== '12') {
        dateStr += 'nd';
      }
      break;
    case '3':
      if (dateStr !== '13') {
        dateStr += 'rd';
      }
      break;
    default:
      dateStr += 'th';
      break;
  }

  return dateStr;
};

// Function to format a timestamp
// Accepts the timestamp and an `options` object as parameters
module.exports = (timestamp, { monthLength = 'short', dateSuffix = true } = {}) => {
  // Create a month object with short and long month names
  const months = [
    monthLength === 'short' ? 'Jan' : 'January',
    monthLength === 'short' ? 'Feb' : 'February',
    monthLength === 'short' ? 'Mar' : 'March',
    monthLength === 'short' ? 'Apr' : 'April',
    monthLength === 'short' ? 'May' : 'May',
    monthLength === 'short' ? 'Jun' : 'June',
    monthLength === 'short' ? 'Jul' : 'July',
    monthLength === 'short' ? 'Aug' : 'August',
    monthLength === 'short' ? 'Sep' : 'September',
    monthLength === 'short' ? 'Oct' : 'October',
    monthLength === 'short' ? 'Nov' : 'November',
    monthLength === 'short' ? 'Dec' : 'December',
  ];

  // Create a new Date object from the timestamp
  const dateObj = new Date(timestamp);

  // Format the month
  const formattedMonth = months[dateObj.getMonth()];

  // Format the day of the month
  const dayOfMonth = dateSuffix
    ? addDateSuffix(dateObj.getDate())
    : dateObj.getDate();

  // Format the year
  const year = dateObj.getFullYear();

  // Format the hour
  let hour = dateObj.getHours() > 12 ? dateObj.getHours() - 12 : dateObj.getHours();
  hour = hour === 0 ? 12 : hour;

  // Format the minutes
  const minutes = (dateObj.getMinutes() < 10 ? '0' : '') + dateObj.getMinutes();

  // Set the period of the day (AM or PM)
  const periodOfDay = dateObj.getHours() >= 12 ? 'pm' : 'am';

  // Create the formatted timestamp string
  const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;

  return formattedTimeStamp;
};