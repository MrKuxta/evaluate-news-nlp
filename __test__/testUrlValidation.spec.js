//import the js file to test
import { checkForUrl } from '../src/client/js/urlValidation';

describe("Testing functionality", () => {
    test("Testing the checkForUrl() function", () => {
        expect(checkForUrl).toBeDefined();
    })
});
