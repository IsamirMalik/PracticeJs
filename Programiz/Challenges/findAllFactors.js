// find all factors of a given number in ascending order

function findAllFactors(num) {
    let factors = [];

    for (let i =1; i<=num ; i++){
        if ( num%i == 0){
            factors.push(i)
        }
    } return factors
}