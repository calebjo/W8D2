Array.prototype.bubbleSort = function() {
    // ele1, ele2 == ele2, ele1

    let sorted = false ; 
    while(!sorted) {
        sorted = true; 

        for(let i = 0; i < this.length - 1; i++) {

            let ele1 = this[i]; 
            let ele2 = this[i+1]; 
            if(ele1 > ele2) {
                this[i] = ele2 ; 
                this[i+1] = ele1; 
                sorted = false; 
            }
        }
    }
    return this
}

arr = [5, 10, 2, 15, 20, 1, 0] ; 

// console.log(arr.bubbleSort())

String.prototype.subString = function() {
    let subs = []; 

    for (let i = 0; i < this.length; i++) {
        let thisSub = ''
        thisSub += this[i]; 
        subs.push(thisSub); 

        for(let j = i+1; j < this.length-1; j++) {
            thisSub += this[j];
            if (!subs.includes(thisSub)) {
                subs.push(thisSub); 
            }
        }

    }
    return subs; 
}

console.log('HeyBuddy'.subString())
