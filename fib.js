function fibs(length) {
    const fibSeq = [0,1];
    for (let i=2; i<length; i++) {
        fibSeq.push(fibSeq[i-2]+fibSeq[i-1]);
    }
    return fibSeq;
}

//console.log(fibs(22));

function fibsRec(length, array = [0,1], index = 2) {
    if (length === 2) {
        return array;
    }
    array.push(array[index-2]+array[index-1]);
    return fibsRec(length-1, array, index+1); 
}

console.log(fibsRec(22));
