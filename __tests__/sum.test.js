// sum.test.js

import {sum} from '../scripts/sum.js'

const { TestScheduler } = require("@jest/core");

test('adds 1 + 2 to equal 3', () => {
    expect(1+2).toBe(3);
})

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});