/*
Palidroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

var tuaParola = prompt('inserisci una parola');
while (tuaParola==""||isNaN(tuaParola)==false||tuaParola.length<2){
    if (tuaParola=="") {
    tuaParola = prompt('La stringa non può essere vuota. Inserisci una parola');
    } else if (isNaN(tuaParola)==false){
    tuaParola = prompt('Non puoi inserire numeri in cifre. Inserisci una parola');
    } else /*(tuaParola.length<2)*/ {
    tuaParola = prompt('La parola deve essere almeno di 2 caratteri. Inserisci una parola');
    }
}
var palindromo = checkPalindromo (tuaParola);
console.log(tuaParola,palindromo);


// Definisco la funzione ---------------------------------------------
function checkPalindromo (parola) {
    //metodo 1
    var inverso =""
    for (i=parola.length-1;i>=0;i--) {
        inverso += parola[i];
    }
    // //metodo 2
    // var inverso = parola.split('').reverse().join('')
    if (parola.toLowerCase()==inverso.toLowerCase()) {
        return 'E\' palindroma'
    } else {
        return 'Non è palindroma'
    }
}

