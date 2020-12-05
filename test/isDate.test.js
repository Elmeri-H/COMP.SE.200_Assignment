import chai from "chai"
import isDate from "../src/isDate.js"
const expect = chai.expect


describe("isDate", () => {
    it("returns the example output when called with the example input", () => {
        expect(isDate(new Date)).to.equal(true);
        expect(isDate('Mon April 23 2012')).to.equal(false);
    })
    it("returns false for invalid input", () => {
        expect(isDate(null)).to.equal(false);
        expect(isDate(undefined)).to.equal(false);
        expect(isDate({ "foo": 1 })).to.equal(false);
        expect(isDate("2020-12-05T16:19:20")).to.equal(false);
        expect(isDate(1607185160000)).to.equal(false);
    })
})