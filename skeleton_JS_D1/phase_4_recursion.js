function range(start,end) {
    if (start === end) { return [start] }

    if (start < end) { 
        let r = (range(start, end - 1));
        r.push(end); 
        return r;
    }
}

// console.log(range(4, 9));

function sumRec(arr) {
    if (arr.length === 0) {
        return 0; 
    } else {
        return (arr[0] + sumRec(arr.slice(1, arr.length)))
    }
}
// arr = [1, 2, 3, 4]
// console.log(sumRec(arr));  
// console.log(arr.slice(0, 2)); 

function exponent(base, exp) {
    if (exp === 0){
        return 1; 
    } else if (exp === 1) {
        return base; 
    } else {
        return (exponent(base, (exp - 1)) * base); 
    }
}

function exponent(base, exp) {
    if (exp === 0){
        return 1; 
    } else if (exp === 1) {
        return base; 
    } else {
        if (exp % 2 !== 0 ) {
            return (exponent(base, ((exp - 1)/2)) * 2); 
        } else {
            return (exponent(base, ((exp/2) * 2))); 
        }
    }
}

// console.log(exponent(2, 5)); 

function fibonacci(n) {
    if (n === 0) {
        return [0]; 
    } else if (n === 1) {
        return [0, 1];
    } else {
        let current = fibonacci(n - 1); 
        // current.push(current[current.length-1] + current[current.length-2]) ; 
        // return current; 
        let ele1 = current[current.length - 1]; 
        let ele2 = current[current.length - 2]; 
        
        current.push(ele1 + ele2) ; 
        return current; 

    }
}

console.log(fibonacci(5)); 