import moment from 'moment';

export default offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  const utcTime = new Date(currentTime.setHours(currentTime.getHours() + utcOffset + offset));

  return moment(utcTime).format('LTS');
};
