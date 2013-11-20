'use strict';

module.exports = {
  deliverDownload: require('./deliverDownload'),
  deliverEjs: require('./deliverEjs'),
  deliverFile: require('./deliverFile'),
  deliverScript: require('./deliverScript'),
  deliverStylesheet: require('./deliverStylesheet'),
  enableDefaultFile: require('./enableDefaultFile'),
  jailRequest: require('./jailRequest'),
  rejectPrivateRequests: require('./rejectPrivateRequests'),
  rejectSslDirectoryRequests: require('./rejectSslDirectoryRequests'),
  replyWith404: require('./replyWith404')
};
