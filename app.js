// 1-Masala
// Loop
{
    function num(a, b) {
        let result = [];
        for (let i = a; i <= b; i++) {
            if (i % 2 === 0) {
                result.push(i);
            }
        }
        return result;
    }

    console.log(num(3, 8));
}
// Rekursiv
{
    function num(a, b) {
        if (a > b) {
            return [];
        } else if (a % 2 === 0) {
            return [a].concat(num(a + 2, b));
        } else {
            return num(a + 1, b);
        }
    }
    
    console.log(num(3, 8));
    
}


// 2-Masala
// Loop
{
    function num(a) {
        let result = [];
        for (let i = 10; i <= a; i += 10) {
            result.push(i);
        }
        return result;
    }
    
    console.log(num(45)); 
    
}
// Rekursiv
{
    function num(a, current = 10, result = []) {
        if (current > a) {
            return result;
        } else {
            result.push(current);
            return num(a, current + 10, result);
        }
    }
    
    console.log(num(45));
    
}

// 3-Masala
// Loop
{
    function loop(a) {
        let result = [];
        for (let i = 1; i <= a; i++) {
            result.push(i * i);
        }
        return result;
    }
    
    console.log(loop(5)); // Natija: [1, 4, 9, 16, 25]
    
}
// Rekursiv
{
    function recur(a, current = 1, result = []) {
        if (current > a) {
            return result;
        } else {
            result.push(current * current);
            return recur(a, current + 1, result);
        }
    }
    
    console.log(recur(5));
    
}

// 4-Masala
{
    function number(num) {
        return parseInt(num.toString().split('').sort().join(''), 10);
    }
    
    console.log(number(23761));
    
}

// 5-Masala
{
    function remove(str) {
        if (str.endsWith('?')) {
            return str.slice(0, -1);
        }
        return str;
    }
    
    console.log(remove("whats your name?")); 
    console.log(remove("hello world?"));
    
}

// 6-Masala
// Loop

{
    function arr(a) {
        let result = [];
        for (let i = 0; i < a; i++) {
            result.push(a);
        }
        return result;
    }
    
    console.log(arr(5));
    
}

// Rekursiv
{
    function arr(a, result = []) {
        if (result.length === a) {
            return result;
        } else {
            result.push(a);
            return arr(a, result);
        }
    }
    
    console.log(arr(5)); // Natija: [5, 5, 5, 5, 5]
    
}

// 7-Masala
{
    function check(value) {
        return Boolean(value);
    }
    
    console.log(check(0));       
    console.log(check(null));  
    console.log(check("salom")); 
    console.log(check(false));  
    console.log(check(1));   
    console.log(check(undefined)); 
    
}