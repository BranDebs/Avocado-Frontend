// Takes seconds and return in the format mm:ss
export const formatTimer = seconds => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  const minsStr = padZeroes(mins, 2);
  const secsStr = padZeroes(secs, 2);

  return minsStr + ':' + secsStr;
};

export const padZeroes = (num, padding) => {
  let str = num + '';
  while (str.length < padding) str = '0' + str;
  return str;
};

export const secondsToMinutes = seconds => {
  return seconds / 60;
};
