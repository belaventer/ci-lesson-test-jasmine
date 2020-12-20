describe ("Drink About", function () {
    it ("should return error negative", function () {
        expect (whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
    });
    it ("should return error positive", function () {
        expect (whatCanIDrink(131)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
    });
    it ("should return toddy", function () {
        expect (whatCanIDrink(13)).toBe("Drink Toddy");
    });
    it ("should return coke", function () {
        expect (whatCanIDrink(17)).toBe("Drink Coke");
    });
    it ("should return beer", function () {
        expect (whatCanIDrink(20)).toBe("Drink Beer");
    });
    it ("should return whisky", function () {
        expect (whatCanIDrink(129)).toBe("Drink Whisky");
    });
});