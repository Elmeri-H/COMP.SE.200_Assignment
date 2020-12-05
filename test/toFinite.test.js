import chai from "chai"
import toFinite from "../src/toFinite.js"
const expect = chai.expect


describe("toFinite", () => {
    it("returns the example output when called with the example input", () => {
        expect(toFinite(3.2)).to.equal(3.2);
        expect(toFinite(Number.MIN_VALUE)).to.equal(5e-324);
        expect(toFinite(Infinity)).to.equal(1.7976931348623157e+308);
        expect(toFinite('3.2')).to.equal(3.2);
    })
    it("returns 0 string with bad input", () => {
        expect(toFinite("")).to.equal(0);
        expect(toFinite("foo")).to.equal(0);
    })
    it("returns 0 when calling with undefined or null inputs", () => {
        expect(toFinite(undefined)).to.equal(0);
        expect(toFinite(null)).to.equal(0);
    })
    it("returns correct number with valid input", () => {
        expect(toFinite("123")).to.equal(123);
        expect(toFinite("-12")).to.equal(-12);
        expect(toFinite(-3)).to.equal(-3);
        expect(toFinite(-Infinity)).to.equal(-1.7976931348623157e+308);
    })
})