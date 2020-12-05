import chai from "chai"
import toInteger from "../src/toInteger.js"
const expect = chai.expect


describe("toInteger", () => {
    it("returns the example output when called with the example input", () => {
        expect(toInteger(3.2)).to.equal(3);
        expect(toInteger(Number.MIN_VALUE)).to.equal(0);
        expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308);
        expect(toInteger('3.2')).to.equal(3);
    })
    it("returns 0 string with bad input", () => {
        expect(toInteger("")).to.equal(0);
        expect(toInteger("foo")).to.equal(0);
    })
    it("returns 0 when calling with undefined or null inputs", () => {
        expect(toInteger(undefined)).to.equal(0);
        expect(toInteger(null)).to.equal(0);
    })
    it("returns correct number with valid input", () => {
        expect(toInteger("123")).to.equal(123);
        expect(toInteger("-12")).to.equal(-12);
        expect(toInteger(-3)).to.equal(-3);
    })
})