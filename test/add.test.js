import chai from "chai";
import add from "../src/add.js";
const expect = chai.expect;

describe("Add positives", () => {
    it("adds integer with another integer", () => {
        expect(add(6,4)).to.eq(10);
    });
    it("adds integer with zero", () => {
        expect(add(6,0)).to.eq(6);
    });
    it("adds zero with integer", () => {
        expect(add(0,5)).to.eq(5);
    });
    it("adds zero with zero", () => {
        expect(add(0,0)).to.eq(0);
    });
});

describe("Add negatives", () => {
    it("adds negative integer with another negative integer", () => {
        expect(add(-6,-4)).to.eq(-10);
    });
    it("adds negative integer with zero", () => {
        expect(add(-6,0)).to.eq(-6);
    });
    it("adds zero with negative integer", () => {
        expect(add(0,-5)).to.eq(-5);
    });
});