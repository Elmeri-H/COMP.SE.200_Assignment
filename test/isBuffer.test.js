import chai from "chai"
import isBuffer from "../src/isBuffer.js"
const expect = chai.expect


describe("isBuffer", () => {
    it("returns the example output when called with the example input", () => {
        expect(isBuffer(new Buffer(2))).to.equal(true);
        expect(isBuffer(new Uint8Array(2))).to.equal(false);
    })
    it("returns false for invalid input", () => {
        expect(isBuffer(null)).to.equal(false);
        expect(isBuffer(undefined)).to.equal(false);
        expect(isBuffer({ "foo": 1 })).to.equal(false);
        expect(isBuffer("2020-12-05T16:19:20")).to.equal(false);
        expect(isBuffer(1607185160000)).to.equal(false);
        expect(isBuffer(() => "foo")).to.equal(false);
    })
})