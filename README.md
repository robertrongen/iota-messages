# iotatest
Test application used in IOTA Academy course.
Quickstart also available on https://docs.iota.org/docs/client-libraries/0.1/getting-started

## Preparation
Requires node.js, verify in terminal with `node -v`

In terminal:
	`npm install @iota/core`

 Initialize npm and create a package.json file with the command:
	`npm init -f`

## Setup accounts
Create a seed in GitBash:
 	`cat /dev/urandom | tr -dc A-Z9 | head -c${1:-81} && echo`

address.js: 
    Replace seed 
    Run to generate 10 addresses

Send test IOTA tokens to address via https://faucet.comnet.einfachiota.de/#/

## Send transaction


Verify transaction: https://utils.iota.org/

