function fibs(length) {
    const fibSeq = [0,1];
    for (let i=2; i<length; i++) {
        fibSeq.push(fibSeq[i-2]+fibSeq[i-1]);
    }
    return fibSeq;
}

