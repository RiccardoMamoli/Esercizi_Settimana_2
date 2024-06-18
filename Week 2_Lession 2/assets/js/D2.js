/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/


// let num1 = 8;
// let num2= 5;

// if (num1 > num2) {
//   console.log('Il primo numero è piu grande');
// } else {
//   console.log('Il secono numero è piu grande');
// }

// -------------------------------------- \\

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/



// let num1 = 8;

// if (num1 !== 5) {
//   console.log('not equal');
// } else {
//   console.log('equal');
// }


// -------------------------------------- \\


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

// let num1 = 10;

// if (num1 % 5 === 0) {
//   console.log('il numero è divisibile per 5');
// } else {
//   console.log('il numero non è divisibile per 5');
// }


// -------------------------------------- \\


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

// let num1 = 2;
// let num2 = 5;
// let sum = num1 + num2;
// let sott = num1 - num2;

// if ((num1 === 8) || (num2 === 8) || (sum === 8) || (sott === 8)) {
//   console.log ('la verifica è giusta');
// } else {
//   console.log ('la verifica non è giusta')
// }

// -------------------------------------- \\


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/


// let totalShoppingCart = 15;
// let shipping = 10;
// let totaleDaAddebitare;

// if (totalShoppingCart > 50) {
//   totaleDaAddebitare = totalShoppingCart;
// } else {
//   totaleDaAddebitare = totalShoppingCart + shipping;
// }

// console.log('Il totale da addebitare è ' + totaleDaAddebitare);


// -------------------------------------- \\


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

// let totalShoppingCart = 100;
// let discount = 10;
// let shipping = 10;
// let totaleDaAddebitare;

// if (totalShoppingCart > 50) {
//   totaleDaAddebitare = totalShoppingCart * (1 - (discount / 100));
// } else {
//   totaleDaAddebitare = totalShoppingCart + shipping;
// }

// console.log('Il totale da addebitare è ' + totaleDaAddebitare);


// -------------------------------------- \\


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

// let num1 = 12;
// let num2 = 44;
// let num3 = 32;

// let array = [num1, num2, num3];
// array.sort()
// console.log(array);


// -------------------------------------- \\



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/


// let num1 = 10;
// if (typeof num1 === 'number') {
//   console.log('è un numero')
// } else {
//   console.log ('non è un numero');
// }


// -------------------------------------- \\


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

// let num1 = 12;

// if (num1 % 2 === 0){
//   console.log('il numero è pari')
// } else {
//   console.log('il numero è dispari')
// }


// -------------------------------------- \\

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

// let val = 3;
// if (val < 10 && val > 5) {
//     console.log("Meno di 10");
//   } else if (val < 5) {
//     console.log("Meno di 5");
//   } else {
//     console.log("Uguale a 10 o maggiore");
//   }


// -------------------------------------- \\


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

// const me = {
//   name: 'John',
//   lastName: 'Doe',
//   skills: ['javascript', 'html', 'css'],
//   city: 'Toronto'
// }

// -------------------------------------- \\


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

// delete me.lastName;

// -------------------------------------- \\

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

// delete me.skills.pop()
// console.log(me);

// -------------------------------------- \\


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

// let numbers = [];
// for (let i = 1; i <=10; i++) {
//   numbers.push(i);
// }
// console.log(numbers)

// -------------------------------------- \\


/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

// let numbers = [];
// for (let i = 1; i <= 10; i++) {
//   numbers.push(i);
// }

// numbers[9] = 100;

// console.log(numbers)

