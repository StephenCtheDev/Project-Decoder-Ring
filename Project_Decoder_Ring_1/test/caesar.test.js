// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar");


 describe("caesar", () => {
  it("Should loop around alphabet", () => {
    const input = "abcdefghijklmnopqrstuvwxyz";
    const shift = -5;
    const expected = "vwxyzabcdefghijklmnopqrstu";
    const actual = caesar(input, shift);
    expect(actual).to.eql(expected);
  });

  it("Should DECODE if encode is false", () => {
    const input = "vwxyzabcdefghijklmnopqrstu";
    const shift = -5;
    const expected = "abcdefghijklmnopqrstuvwxyz";
    const actual = caesar(input, shift, false);
    expect(actual).to.eql(expected);
  });

  it("Should return false if shift is missing or 0", () => {
    const shift = 0;
    const actual = caesar("Hello", shift);
    expect(actual).to.be.false;
  });

  it("Should return false if shift is greater than 25 or less than -25", () => {
    const shift = 30;
    const actual = caesar("Hello", shift);
    expect(actual).to.be.false;
  });

  it("Should ignore capitalization and maintain spaces/special characters", () => {
    const shift = -5;
    const input = "my SaNDwIcH IS MisSinG!";
    const expected = "ht nviyrdxc dn hdnndib!"
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  });


