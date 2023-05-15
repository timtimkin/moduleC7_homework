import { reverseString } from "../index.js";
describe("reverseString function works", function() {
    it("function reverse hello", function() {
        expect(reverseString('hello')).toEqual('olleh');
    });
});