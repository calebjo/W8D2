Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++){
        callback(this[i]);
    }
}

function myPrint(element){
    console.log(element);
}

let arr = [1, 2, 3, 4];
// console.log(arr.myEach(myPrint));
// arr.myEach(myPrint);

// ----------------------------------------------------------------------------

Array.prototype.myMap = function(callback) {
    let arr = [];
    
    this.myEach(function(ele) { 
        arr.push(callback(ele));
    });
    
    return arr;
}

function two(){
    return 2;
}

// console.log(arr.myMap(two));

// ----------------------------------------------------------------------------

Array.prototype.myReduce = function(callback, initialValue = 0) {
    let sum = initialValue;

    this.myEach(function(ele) { 
        sum += callback(ele);
    });

    return sum;
}

console.log(arr.myReduce(two));