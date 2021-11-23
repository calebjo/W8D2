let arr = [1, 2, 3, 4, 5, 5]; 
let arr2 = [-1, 0, 1]

Array.prototype.uniq = function(){
    let fin_arr = []; 
    
    for (let i = 0; i < this.length; i++){
        if (!(fin_arr.includes(this[i]))){
            fin_arr.push(this[i]); 
        }
   
    }; 
     return fin_arr; 
}; 

// console.log(arr.uniq())

Array.prototype.twoSum = function() {
    let pairs = []; 

    for (let i = 0; i < this.length; i++) {
        for (let j = i+1; j < this.length; j++) {
            if(this[i] + this[j] === 0) {
                pairs.push([i, j]); 
            }
        }
    }
    return pairs; 
}

// console.log(arr2.twoSum())
let arr3 = [[1, 2], [8, 9]]; 

Array.prototype.transpose = function() { // let's assume it's a nice rectangle of some kind
    let transposed = []

    for (let i = 0; i < this.length; i++) {
        let column = []; 

        for (let j = 0; j < this[i].length; j++) {
            column.push(this[j][i]); 
            // console.log(this[j][i]); 
            // transposed[i][j] = this[j][i]
        }
        // console.log(column); 
        transposed.push(column); 
    }
    return transposed; 
}

// console.log(arr3.transpose())



