import chai from "chai"
import divide from "../src/divide.js"
const expect = chai.expect

describe("Divide", () => {
    it("returns the example output when called with the example input", () => {
        expect(divide(6, 4)).to.equal(1.5);
    })
    it("throws an error when dividing with zero", () => {
        expect(divide(5, 0)).to.throw;
    })
    it("returns a negative value when either the dividend or the divisor is negative", () => {
        expect(divide(-6, 3)).to.equal(-2);
        expect(divide(6, -3)).to.equal(-2);
    })
    it("returns a positive value when both the dividend and the divisors are negative numbers", () => {
        expect(divide(-6, -3)).to.equal(2);
    })
    it("throws an error when calling with illegal inputs", () => {
        expect(divide([5, 0])).to.throw;
        expect(divide(NaN, 0)).to.throw;
        expect(divide(5, 1, 3)).to.throw;
        expect(divide('Foo', 3)).to.throw;
    })
})