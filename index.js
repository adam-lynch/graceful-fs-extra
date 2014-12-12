var proxyquire = require('proxyquire');
module.exports = proxyquire('node-fs-extra', { 'ncp': require('graceful-ncp') });