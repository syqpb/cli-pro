'use strict';

const factory = require('yargs/yargs');
const commonds = require('./commonds');

module.exports = cli;

function cli(cwd) {
  const parser = factory(null, cwd);

  parser.alias('h', 'help');
  parser.alias('v', 'version');

  parser.usage(
    "$0",
    "TODO: description",
    yargs => {
      yargs.options({
        // TODO: options
      });
    },
    argv => commonds(argv)
  );

  return parser;
}
