const helpers = require('yeoman-test');
const assert = require('yeoman-assert');
const path = require('path');

// const {
//     describe,
//     test
// } = global;

describe('App Generator', () => {
    describe('projectType question', () => {
        test('server projectType', () => helpers
            .run(path.join(__dirname, '../index.js'))
            .then(() => {
                assert.file('package.json');
            }));
    });
});
