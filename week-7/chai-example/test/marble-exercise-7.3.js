let fruits = require(".../marble-fruits");
let chai = require("chai");
let assert = chai.assert;

describe("fruits",function(){
    it("should return an array of fruits", function(){
        let fruit=fruits('Apple,Orange,Mango');

        assert(Array.isArray(fruit));
    });
});