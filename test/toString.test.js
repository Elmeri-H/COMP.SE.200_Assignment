import chai from "chai"
import toString from "../src/toString.js"
const expect = chai.expect


describe("toString", () => {
    it("returns the example output when called with the example input", () => {
        expect(toString(-0)).to.equal('-0');
        expect(toString([1,2,3])).to.equal('1,2,3');
    })
    it("returns '' when called with null", () => {
        expect(toString(null)).to.equal('');
    })
    it("returns '' when called with undefined", () => {
        expect(toString(undefined)).to.equal('');
    })
    it("returns '0' when called with 0", () => {
        expect(toString(0)).to.equal("0");
    })
    it("returns string with number when called with integer", () => {
        expect(toString(-5)).to.equal('-5');
        expect(toString(5)).to.equal('5');
    })
    it("returns a typeof string when calling with object", () => {
        expect(typeof toString({ a: "b" })).to.equal("string");
        expect(typeof toString({ a: 3 })).to.equal("string");
        expect(typeof toString({ a: { c: "b" } })).to.equal("string");
    })
    it("returns '' when called with array of null", () => {
        expect(toString([null])).to.equal('');
    })
})