#!/usr/bin/env node
var exec = require('child_process').exec;

if (typeof process.env['TEAMCITY_BUILDCONF_NAME'] === 'undefined') {
  exec('guppy post-checkout', function(error, out) {
    if (error !== null) {
      throw error;
    }
    
    process.stdout.write(out);
  });
}