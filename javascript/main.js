// JSnack 5

// Crea un array vuoto.
//  Chiedi per 6 volte all’utente di inserire un numero
//  Se è dispari inseriscilo nell’array

var numero = [];

for (var i = 0; i < 6; i++) {
   var numeroUtente = parseInt( prompt("inserisci un numero") ) ;

   if(numeroUtente % 2 != 0) {
       numero.push(numeroUtente);
   }
}

console.log(numero);



// JSnack 4

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby (Paolo, Fabio, Lorenzo)
// Chiedi all’utente il suo nome
// Comunicagli se può partecipare o no alla festa.

// var nome = prompt("come ti chiami?").toLowerCase();

// var invitati = ["paolo", "fabio", "lorenzo", "matteo", "gianni"];

// var ospiteOk = false;

// for (var i = 0; i < invitati.length; i++) {
    
//     item = invitati[i];
    
//     if (nome == item) {
//         ospiteOk = true;
//     }
// }

// if (ospiteOk == true) {
//     console.log("Benvenuto alla nostra festa")
// } else {
//     console.log("Persona non grata. Arrivederci, alla prossima. Grandissimo come sempre eh!")
// }




// JSnack 3



// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma con il for.



// var somma = 0;


// for (var i = 0; i < 5; i++) {

//     var numero = parseInt(prompt("inserisci un numero")); 

//     somma += numero;
    
// }

// console.log(somma);




// JSnack 2

// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa una stringa contenente prima la parola più corta, uno spazio e poi la parola più lunga.


// var parola1 = prompt("inserisci una parola");
// var parola2 = prompt("inserisci un'altra parola");


// if (parola1.length > parola2.length) {
//     console.log( parola2 + " " + parola1 )
// } else if (parola2.length > parola1.length) {
//     console.log( parola1 + " " + parola2)
// } else {
//     console.log("Le parole hanno lo stesso numero di caratteri")
// }
 



// JSnack 1
// L’utente inserisce due numeri in successione, con due prompt.
//   Il software stampa il maggiore.

// var primoNumero = parseInt( prompt("scrivi un numero") );

// var secondoNumero = parseInt( prompt("scrivi un altro numero") );

// if (primoNumero > secondoNumero) {

//     console.log(primoNumero + " è più grande");

// }
// else if (secondoNumero > primoNumero) {

//     console.log(secondoNumero + " è più grande");

// }

// else {
//     console.log("I numeri sono di uguale valore");
// }







