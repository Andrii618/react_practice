import moment from 'moment';

export default date => new Date().getFullYear() - new Date(date).getFullYear();
