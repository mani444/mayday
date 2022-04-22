export const secondsToTime = (secs) => {
  // let hours = Math.floor(secs / (60 * 60));

  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let finalTime = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
  return finalTime;
};
