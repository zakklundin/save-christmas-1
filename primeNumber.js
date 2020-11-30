//algoritm som hittar alla primtal

function primeNumber(N) {
    let arr = []
    for (let i = 0; i < N; i++) {
        let x = 0

        for (let j = 2; j < i; j++) {
            if (i % j ==0) {
                x = 1
                break
            }
        }
        if (i > 1 && x == 0){
        arr.push(i)
        }   
    
    }
    return arr
}

console.log(primeNumber(1000))