import { reverseString } from "../index.js";
describe("reverseString function works", function() {
    it("function reverse hello and world", function() {
        expect(reverseString('hello')).toEqual('olleh');
        expect(reverseString('world')).toEqual('dlrow');
    });
//делает ошибочную функцию
    it("function reverse invalid wow", function() {
        expect(reverseString('wow')).toEqual('ого');
    });
});
