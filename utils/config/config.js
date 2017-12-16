/**
 * Environment dependent configuration manamgement
 *
 * default configuration is defined in:
 *    - defaults.json
 *
 * anything that is environment specific is
 *  - for development and ci instances:
 *      - in a checked in [env].json file in this directory
 *
 *  - for all real server instances (running with pm2 on debian linux)
 *      - defined in the server machine config (for YouPers internal: see the private repo "serveradmin", deployed using ansible)
 *
 *  IMPORTANT:
 *  No passwords/credentials with access to production level data can be checked into this repository, they must go to the
 *  environment config!!!
 */

var nconf = require('nconf');
var env = process.env.NODE_ENV || 'development';
console.log("NODE_ENV:" + process.env.NODE_ENV + ", using env: " + env);

//
// 1. any overrides
//
nconf.overrides({});

//
// 2. `process.env`
//    the config on real linux pm2 instances is loaded via environment variables in this step
//    pm2 is started using a processes.json file that configures all needed env variables.
//
nconf.env();
// 3. `process.argv`
//     other config could be passed as arguments to the 'node app.js' command line, we do not use this under normal
//     circonstances.
// Disabled, currently not working with pm2!
// nconf.argv();

//
// 4. Values in `config/[env].json`
//
nconf.file('envspecific_'+env, require('path').normalize(__dirname + '/'+ env + '.json'));
console.log('reading config from: ' + require('path').normalize(__dirname + '/'+ env + '.json'));

//
// 5. Values in `config/defaults.json`
//
nconf.file('defaultfile',require('path').normalize(__dirname + '/defaults.json'));
console.log('reading config from: ' + require('path').normalize(__dirname + '/defaults.json'));

//
// 6. hardcoded defaults:
// will probably not be used, we use the defaults.json file instead.
nconf.defaults({});

module.exports = nconf.get();