import chai from "chai"
import isBoolean from "../src/isBoolean.js"
const expect = chai.expect


describe("isBoolean", () => {
    it("returns the example output when called with the example input", () => {
        expect(isBoolean(false)).to.equal(true);
        expect(isBoolean(true)).to.equal(true);
        expect(isBoolean(null)).to.equal(false);
    })
    it("returns false for invalid input", () => {
        expect(isBoolean(undefined)).to.equal(false);
        expect(isBoolean({ "foo": 1 })).to.equal(false);
        expect(isBoolean("true")).to.equal(false);
        expect(isBoolean(1)).to.equal(false);
        expect(isBoolean(-1)).to.equal(false);
        expect(isBoolean(0)).to.equal(false);
        expect(isBoolean(() => "foo")).to.equal(false);
    })
})