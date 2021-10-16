//import the js file to test
//import { TestWatcher } from '@jest/core';

import { handleSubmit } from '../src/client/js/formHandler';

describe("Testing functionality", () => {
    test("Testing the handleSubmit() function", () => {
        expect(handleSubmit).toBeDefined();
    })
});
