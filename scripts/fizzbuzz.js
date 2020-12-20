fizzBuzz = function() {

};

fizzBuzz.prototype.check = function(age) {
    if (typeof(age) == "number") {
        if (age % 3 == 0 && age % 5 == 0) {
            return "FizzBuzz";
        } else if (age % 3 == 0 && age % 5 != 0) {
            return "Fizz";
        } else if (age % 5 == 0 && age % 3 != 0) {
            return "Buzz";
        } else {
            return age;
        };
    } else {
        return "Error!";
    }
};