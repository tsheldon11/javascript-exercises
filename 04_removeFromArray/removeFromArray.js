const removeFromArray = function(...theArgs) {
    let firstArray = Array.from(arguments[0]);

    for(let i=firstArray.length; i>0; i--){
        for(const item of firstArray){
            if(item === arguments[i]){
                firstArray.splice(firstArray.indexOf(item),1);
            }
        }
    }
    return firstArray;
};

// Do not edit below this line
module.exports = removeFromArray;
