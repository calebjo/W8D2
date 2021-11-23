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

// console.log(fibonacci(5)); 

function deepDup(array){
    let newArr = [];
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] === Array) {
            deepDup(array[i]);
        } else {
            newArr.push(array[i]);
        }
    }
    return newArr;
}


// let arr1 = [[1,2],[3],[4,5,[6]]];
// let arr2 = deepDup(arr1);
// // console.log(deepDup(arr1));
// arr1.push([5]);
// console.log(arr1);
// console.log(arr2);

function bSearch(arr, target){
    if(arr.length === 0) {
        return -1;
    } else {
        let midI = Math.floor(arr.length/2);

        if (arr[midI] === target){
            return midI;
        } else if (arr[midI] < target){
            let right = arr.slice(midI+1, arr.length);
            return bSearch(right, target);
        } else if (arr[midI] > target){
            let left = arr.slice(0, midI-1);
            return bSearch(left, target);
        }  
    }
}

let arr1 = [1, 2, 3, 4, 7, 11, 14];
console.log(bSearch(arr1, 7));
