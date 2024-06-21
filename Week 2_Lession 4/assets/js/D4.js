/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

let l1 = 10;
let l2 = 30;


function area() {
    return l1 * l2;
}

// console.log(area(l1 * l2))


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

let num1 = 10;
let num2 = 30;
function crazySum() {

    if (num1 === num2) {
        return (num1 + num2) * 3;
    } else {
        return (num1 + num2);
    }
}

// console.log(crazySum())

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

let num3 = 30;

function crazyDiff() {
    if (num3 > 19) {
        return (Math.abs((num3 - 19) * 3));
    } else {
        return (Math.abs(num3 - 19));
    }
}

// console.log(crazyDiff())


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

let num4 = 21;
function boundary() {
    if (num4 > 20 && num4 < 100 || num4 === 400) {
        return true;
    } else {
        return false;
    }
}

// console.log(boundary());


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

let string = 'Questa è una stringa lunga';

function epify() {
    if (string.startsWith('EPICODE')) {
        return string;
    } else {
        return 'EPICODE' + string;
    }

}

// console.log(epify());

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

let num5 = 21;

function check3and7() {
    if (num5 % 3 === 0 || num5 % 7 === 0) {
        return 'la verifica è corretta';
    } else {
        return 'la verifica non è corretta'
    }
}

// console.log(check3and7());


/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

let string1 = 'Mi chiamo Riccardo';

function reverseString() {
    return string1.split('').reverse('').join('');
}

// console.log(reverseString());

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/


function upperFirst(string10) {
    string = string10.toLowerCase();
    word = string10.split(' '); // splitta la stringa in array di parole
    let final = [];
    for (i = 0; i < word.lenght; i++) {
        let firstLetter = word[i].charAt(0); // per ogni parola estrae la prima lettera
        firstLetter = firstLetter.toUpperCase; // trasforma la prima lettera in maiuscolo
        let cut = word[i].slice(1); // taglia la prima lettera della parola 
        let newWords = firstLetter + cut; // sommi la lettera maiuscola con il resto della parola;
        final.push(newWords);
    }
    console.log(final.join(' '));

}



/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

let string4 = 'Ancora una volta usiamo le stringhe';

function cutString() {
    return string4.substring(1, string4.length - 1);
}

// console.log(cutString());



/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

let num6 = 18;
let newArray = [];


function giveMeRandom(num6) {
    for (i = 0; i < num6; i++) {
        let randomNum = Math.floor(Math.random() * 11);
        newArray.push(randomNum);
    }
    return newArray;
}

// console.log(giveMeRandom(num6));


