const MapleEnv = require('../env');

const hostname = MapleEnv.hostname || 'localhost';

require('remotedev-server')({ secure: false, hostname, port: 5678 });
