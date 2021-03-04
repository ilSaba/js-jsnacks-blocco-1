var nome = prompt("como te llamas?");

var nomi = ["Marco", "Lorenzo", "Nico", "Andrea", "Giuseppe"];

var soldatino = false;

for (var i = 0; i < nome.length; i++) {
    if (nomi[i] == nome) {
        soldatino = true;
    }
}

if (soldatino) {
    console.log("Prego");
} else {
    console.log("Non puo' entrare");
}