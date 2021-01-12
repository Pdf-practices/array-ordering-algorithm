function merge(left: any, right: any) {
    let arr = []

    while (left.length && right.length) {

        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    
    return [ ...arr, ...left, ...right ]
}