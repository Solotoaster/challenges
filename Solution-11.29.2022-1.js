let min = function(list){
    list.sort((a, b) => (a - b));
    return list[0];
}

let max = function(list){
    list.sort((a, b) => (b - a));
    return list[0];
}

//find max and min values of list