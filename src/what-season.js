function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date.getMonth) !== '[object Function]') throw new Error('Invalid date!');

  try {
    isNaN(date);
  } catch (err) {
    throw new Error('Invalid date!');
  }

  const currentMonth = date.getMonth() + 1;
  if (currentMonth === 12 || currentMonth < 3) return 'winter';
  if (currentMonth < 6) return 'spring';
  if (currentMonth < 9) return 'summer';
  return 'autumn'
}

module.exports = {
  getSeason
};
