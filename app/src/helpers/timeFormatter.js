const timeFormatter = time => {
  const mins = (Math.floor(parseInt(time) / 60)).toString();
  let secs = parseInt(time) % 60;
  secs = secs < 10 ? '0' + secs.toString() : secs.toString();
  const hund = parseFloat(time).toFixed(2).toString().split('.')[1];
  
  const formattedTime = mins + ':' + secs + '.' + hund;

  return formattedTime;
}

export default timeFormatter;
