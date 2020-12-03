import chai from "chai";
import ceil from "../src/ceil.js"
const expect = chai.expect;

describe("Ceil", () => {
    it("rounds up to one digit when precision is not given", () => {
        expect(ceil(1.001)).to.equal(2);
        expect(ceil(1.01)).to.equal(2);
        expect(ceil(1.0013123123)).to.equal(2);
        expect(ceil(0.5)).to.equal(1);
    })
    it("rounds up to the given amount of digits when precision is given", () => {
        expect(ceil(1.001, 2)).to.equal(1.01);
        expect(ceil(1.01, 1)).to.equal(1.1);
        expect(ceil(1.0013123123, 4)).to.equal(1.0014);
        expect(ceil(0.5, 1)).to.equal(0.5);
        expect(ceil(6040, -2)).to.equal(6100);
    })
    it("works with negative numbers", () => {
        expect(ceil(-1.001)).to.equal(-1);
        expect(ceil(-1.01)).to.equal(-1);
        expect(ceil(-1.0013123123)).to.equal(-1);
        expect(ceil(-0.5)).to.equal(0);
        expect(ceil(-1.001, 2)).to.equal(-1.00);
        expect(ceil(-1.01, 1)).to.equal(-1.0);
        expect(ceil(-1.0013123123, 4)).to.equal(-1.0013);
        expect(ceil(-0.5, 1)).to.equal(-0.5);
        expect(ceil(-6040, -2)).to.equal(-6000);
    })
    it("identifies NaN values", () => {
        expect(ceil('FOO')).to.be.NaN;
        expect(ceil([1, 2])).to.be.NaN;
        expect(ceil({'a':1})).to.be.NaN;
    })
})