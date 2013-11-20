'use strict';

module.exports = {
  deliverDownload: require('./deliverDownload'),
  deliverFile: require('./deliverFile'),
  deliverStylesheet: require('./deliverStylesheet'),
  enableDefaultFile: require('./enableDefaultFile'),
  jailRequest: require('./jailRequest'),
  rejectPrivateRequests: require('./rejectPrivateRequests'),
  rejectSslDirectoryRequests: require('./rejectSslDirectoryRequests'),
  replyWith404: require('./replyWith404')
};
