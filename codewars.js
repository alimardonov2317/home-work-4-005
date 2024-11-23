// 1-Masala
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
{
    function basicOp(operation, value1, value2) {
        switch (operation) {
            case '+':
                return value1 + value2;
            case '-':
                return value1 - value2;
            case '*':
                return value1 * value2;
            case '/':
                return value1 / value2;
            default:
                return "Invalid operation";
        }
    }

    console.log(basicOp('+', 5, 3));
    console.log(basicOp('-', 5, 3));
    console.log(basicOp('*', 5, 3));
    console.log(basicOp('/', 6, 3));
    console.log(basicOp('%', 5, 3));

}

// 2-Masala
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
// Nathan loves cycling.

{
    function litres(time) {
        return Math.floor(time * 0.5);
    }

    console.log(litres(3));
    console.log(litres(6.7));
    console.log(litres(11.8));
}

// 3-Masala
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
{
    function century(year) {
        return Math.ceil(year / 100);
    }

    console.log(century(1705));
    console.log(century(1601));
    console.log(century(2000));
}

// 4-Masala
// Given an array of integers, return a new array with each value doubled.For example:[1, 2, 3] --> [2, 4, 6]
{
    function maps(x) {
        return x.map(num => num * 2);
    }

    console.log(maps([1, 2, 3]));
    console.log(maps([4, 5, 6]));
    console.log(maps([0, -1, 3]));
}

// 5-Masala
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
{
    function digitize(n) {
        return n.toString().split('').reverse().map(Number);
    }
    
    console.log(digitize(35231)); 
    console.log(digitize(0));     
    
}

