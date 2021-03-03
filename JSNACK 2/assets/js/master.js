var parola1 = prompt("Dimmi una parola").trim();

var parola2 = prompt("Dimmene un'altra").trim();

console.log(parola1.length);
console.log(parola2.length);

if (parola1.length > parola2.length){
    console.log(parola2);
    console.log(parola1);
} else {
    console.log(parola1, parola2);
}
