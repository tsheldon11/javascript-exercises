const reverseString = function(string) {

    let items = Array.from(string);
    let reverseItem = "";

    for(let i=items.length-1; i>=0; i--){
        reverseItem += items[i]; 
    }

    return reverseItem;
};

// Do not edit below this line
module.exports = reverseString;
