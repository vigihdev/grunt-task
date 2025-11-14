const path = require('node:path');
const { existsSync, lstat, lstatSync, readFileSync, writeFileSync } = require('node:fs');
const { cwd, env } = require('node:process');
const dotenv = require('dotenv');
const PackageJson = require('./lib/models/package-json');
const myEnv = dotenv.config({ vo: "bar" })

const bs = path.join(cwd(), env?.BOOTSTRAP4_BUNDLE_BASEPATH)
console.log(
    JSON.parse(readFileSync(path.join(bs, 'package.json'), { encoding: "utf-8" })).name
);

const model = new PackageJson(path.join(bs, 'package.json'));
console.log(model.getScripts().get('rama').value);

// npm install @vigihdev/test-packet@file:../test-paket