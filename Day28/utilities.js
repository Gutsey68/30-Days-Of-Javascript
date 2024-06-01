function afficheDate() {
  let dateNow = new Date();
  let todayDay = dateNow.getDay();
  let todayDate = dateNow.getDate();
  const todayYear = dateNow.getFullYear();
  let todayHour = dateNow.getHours();
  let todayMinutes = dateNow.getMinutes();
  if (todayHour < 10) {
    todayHour = '0' + todayHour;
  }
  if (todayMinutes < 10) {
    todayMinutes = '0' + todayMinutes;
  }

  if (todayDate < 10) {
    todayDate = '0' + todayDate;
  }
  switch (todayDay) {
    case 1:
      todayDay = 'JAN';
      break;
    case 2:
      todayDay = 'FEB';
      break;
    case 3:
      todayDay = 'MAR';
      break;
    case 4:
      todayDay = 'APR';
      break;
    case 5:
      todayDay = 'MAY';
      break;
    case 6:
      todayDay = 'JUN';
      break;
    case 7:
      todayDay = 'JUL';
      break;
    case 8:
      todayDay = 'AUG';
      break;
    case 9:
      todayDay = 'SEP';
      break;
    case 10:
      todayDay = 'OCT';
      break;
    case 11:
      todayDay = 'NOV';
      break;
    case 12:
      todayDay = 'DEC';
      break;
    default:
      break;
  }

  return (date = `${todayDay} ${todayDate} ${todayYear} ${todayHour}:${todayMinutes}`);
}
