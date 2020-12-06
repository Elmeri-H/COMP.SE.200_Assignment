import chai from "chai"
import isArguments from "../src/isArguments.js"
const expect = chai.expect

describe("isArguments", () => {
    it("returns the example outputs when called with the example inputs", () => {
        expect(isArguments(function() { return arguments }())).to.equal(true);
        expect(isArguments([1, 2, 3])).to.equal(false);
    })
    it("works when called with different types of parameters", () => {
        expect(isArguments({})).to.equal(false);
        expect(isArguments(null)).to.equal(false);
        expect(isArguments(undefined)).to.equal(false);
        expect(isArguments(function() {}())).to.equal(false);
    })
    it("throws an error when called with faulty parameters", () => {
        expect(() => isArguments(2, 3)).to.throw();
        expect(() => isArguments()).to.throw();
    })
})