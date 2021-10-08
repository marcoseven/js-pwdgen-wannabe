// Chiediamo all'utente il suo nome
const nome = prompt("Come ti chiami?");

// Chiediamo all'utente il suo cognome
const last_name = prompt("Qual'è il tuo cognome?");

// Chiediamo all'utente il suo colore preferito
const colour = prompt("Qual'è il tuo colore preferito?");

// rispondiamo all'utente mostrandogli il suo nome, cognome e colore preferito + 21
console.log("Risposte: " + nome + last_name + colour + "21");
document.getElementById("nome", "last_name", "colour").innerHTML =
	nome + last_name + colour + "21";
