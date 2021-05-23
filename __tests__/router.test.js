/**
 * @jest-environment jsdom
 */

import {pushToHistory} from '../scripts/router.js'

/* History seems to start with 1 element in the stack 
   So the adding 1 element should increase the stack to 2 the first time.
   The length of the stack does not reset between tests.
*/
describe('Stack length after ', () => {
    test('going to settings', () => {
        expect(pushToHistory('settings').length).toBe(2);
    })
    test('going to entry', () => {
        expect(pushToHistory('entry').length).toBe(3);
    })
    test('going to default', () => {
        expect(pushToHistory('default').length).toBe(4);
    })
})

describe('My state is ', () => {
    test('settings', () => {
        // Use toEqual for objects because it does a deep comparison of the properties of the values 
        expect(pushToHistory('settings').state).toEqual({ page: 'settings' });
    })
    test('entry', () => {
        expect(pushToHistory('entry', 2).state).toEqual({ page: 'entry2'});
    })
    test('default', () => {
        expect(pushToHistory('default').state).toEqual({});
    })
})