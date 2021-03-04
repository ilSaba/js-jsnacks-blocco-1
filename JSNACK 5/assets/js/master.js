var array = [];

for (var i = 0; i < 6; i++){
    var input = parseInt(prompt("Dimmi un numero"));
    if (input%2) {
        array.push(input);
    }
}
console.log(array);
