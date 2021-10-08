// Domandiamo all'utente il suo nome
const first_name = prompt("Qual'è il tuo nome?");

// Domandiamo all'utente il suo cognome
const last_name = prompt("Qual'è il tuo cognome?");

// Domandiamo all'utente il suo colore preferito
const colour = prompt("Qual'è il tuo colore preferito?");

// risultato delle risposte inserite dall'utente
const result = first_name + last_name + colour + "21";

// risposte visionate su console
console.log("Il tuo nome è " + first_name);
console.log("Il tuo cognome è " + last_name);
console.log("Il tuo colore preferito è " + colour);
console.log(result);

// risposte visionate dall'utente
document.getElementById("answers").innerHTML = result;
