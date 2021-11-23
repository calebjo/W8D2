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
    
}