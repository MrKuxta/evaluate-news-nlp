//import the js file to test
//import { TestWatcher } from "@jest/core";
import { getTextInfo } from "../src/server/index";

describe("Testing functionality", () => {
    test("Testing the getTextInfo() function", () => {
        expect(getTextInfo).toBeDefined();
    })});