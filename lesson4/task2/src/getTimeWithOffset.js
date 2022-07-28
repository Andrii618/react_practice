import moment from 'moment';

const UTC_OFFSET = 3;

export default offset =>
  moment()
    .subtract(-offset + UTC_OFFSET, 'hours')
    .format('h:mm:ss a');
