require('babel-register');
require('babel-polyfill');

var type = process.argv[2];

switch (type) {
  case 'frontier': {
    require('./frontier');
  }
}
