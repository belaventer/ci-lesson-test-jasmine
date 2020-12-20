describe("FizzBuzz", function() {

    beforeEach(function() {
        fizzBuzzI = new fizzBuzz;
    });

    describe("FizzBuzz function", function() {
        it("should return FizzBuzz", function() {
            expect(fizzBuzzI.check(15)).toBe("FizzBuzz");
        });
        it("should return Fizz", function() {
            expect(fizzBuzzI.check(21)).toBe("Fizz");
        });
        it("should return Buzz", function() {
            expect(fizzBuzzI.check(50)).toBe("Buzz");
        });
        it("should return number", function() {
            expect(fizzBuzzI.check(26)).toBe(26);
        });
        it("should return error", function() {
            expect(fizzBuzzI.check("one")).toBe("Error!");
        });
    });
});