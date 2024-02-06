const moment = require('moment');

const formatTimestamp = (timestamp) => {
  return moment.unix(timestamp).format('DD/MM/YY hh:mm A');
}

export default formatTimestamp;