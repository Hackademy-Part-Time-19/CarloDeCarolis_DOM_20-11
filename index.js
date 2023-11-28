//Esercizio 1

let persona = {}

persona.nome = "Carlo";
persona.cognome = "De Carolis";
persona.età = 31;

persona.saluta = function () {
    return `Ciao, sono ${this.nome} ${this.cognome} e ho ${this.età} anni!`;
}

console.log(persona.saluta());

//Esercizio 2

let agenda = {}

agenda.contatti = [
    {
        nome: "Alice",
        numeroDiTelefono: 33988866612
    },
    {
        nome: "Bob",
        numeroDiTelefono: 34567898522
    },
    {
        nome: "Charlie",
        numeroDiTelefono: 33124567529
    }
];

// Funzione per mostrare tutti i contatti
function mostraTuttiContatti() {
    agenda.contatti.forEach(contatto => {
        console.log(`Il mio nome è ${contatto.nome} e il mio numero di telefono è ${contatto.numeroDiTelefono}`);
    });
}

// Funzione per mostrare un singolo contatto
function mostraSingoloContatto(nomeCercato) {
    const contatto = agenda.contatti.find(cont => cont.nome === nomeCercato);
    if (contatto) {
        console.log(`Il singolo contatto visualizzato ha nome ${contatto.nome} e numero di telefono ${contatto.numeroDiTelefono}`);
    } else {
        console.log("Contatto non trovato!");
    }
}

//Funziona per eliminare un contatto
function eliminaContatto(nomeContatto) {
    const indiceDaRimuovere = agenda.contatti.findIndex(cont => cont.nome === nomeContatto);
    if (indiceDaRimuovere !== -1) {
        agenda.contatti.splice(indiceDaRimuovere, 1);
    }
}


//Funzione per aggiungere un contatto
function aggiungiContatto(nome, numeroDiTelefono) {
    agenda.contatti.push({
        nome: nome,
        numeroDiTelefono: numeroDiTelefono
    });

    console.log(`Ho aggiunto alla mia agenda il contatto con nome ${nome} e con il numero di telefono ${numeroDiTelefono}`);
}

//Funzione per modificare un contatto
// Funzione per modificare un contatto dato il nome e il nuovo numero di telefono
function modificaContatto(nome, nuovoNumero) {
    const contatti = agenda.contatti;
    const indiceContatto = contatti.findIndex(contatto => contatto.nome === nome);

    if (indiceContatto !== -1) {
        contatti.splice(indiceContatto, 1, { nome: nome, numeroDiTelefono: nuovoNumero });
        console.log("Contatto modificato con successo!");
    } else {
        console.log("Contatto non trovato.");
    }
}

// Mostra tutti i contatti
mostraTuttiContatti();

//Mostra singolo contatto
mostraSingoloContatto("Charlie")

//Elimina singolo contatto
eliminaContatto("Bob");
console.log(agenda.contatti);

//Aggiungi contatto
aggiungiContatto("Carlo", 34505635200);

//Modifica contatto
modificaContatto("Bob", 3333333333);
console.log(agenda.contatti);


