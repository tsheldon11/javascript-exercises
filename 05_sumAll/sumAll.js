const sumAll = function(intOne, intTwo) {
    let total = 0;
    let i = 0;
    let x = 0;

    if(intOne < 0 || intTwo < 0 || !Number.isInteger(intOne) || !Number.isInteger(intTwo)){
        return "ERROR";
    }

    if(intOne<intTwo){
        i = intOne;
        x = intTwo;
    } else {
        i = intTwo;
        x = intOne;
    }

    for(i; i <=x; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
