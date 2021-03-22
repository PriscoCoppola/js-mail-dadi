// MAIL

// 1) Chiedi all’utente la sua email
// 2) Controlla che sia nella lista di chi può accedere
// 3) Stampa un messaggio appropriato sull’esito del controllo

function ok() {
    var list = ['boolean@gmail.com', 'francesco@gmail.com', 'gabriele@gmail.com'];

    var userMail = document.getElementById('text').value;

    var userFound = false;

    for (var i = 0; i < list.length; i++) {

        if (userMail === list[i]) {
            userFound = true;
        }
    }

    if (userFound === true) {
        document.getElementById('print').innerHTML = ('La tua mail è presente nel database')
    } else {
        document.getElementById('print').innerHTML = ('La tua mail non è presente nel database')
    }
}




// DADI

// 1) Generare un numero random da 1 a 6
// 2) 1 per il giocatore e 1 per il computer
// 3) Stabilire il vincitore, in base a chi fa il punteggio più alto

var userNumber = Math.floor(Math.random() * 6) + 1;
document.getElementById('user').innerHTML = 'Dado Utente: ' + userNumber;

var computerNumber = Math.floor(Math.random() * 6) + 1;
document.getElementById('pc').innerHTML = 'Dado Computer: ' + computerNumber;

if (userNumber > computerNumber) {
    document.getElementById('result').innerHTML = ("Il vincitore è l'utente")
} else if (userNumber < computerNumber) {
    document.getElementById('result').innerHTML = ("Il vincitore è il computer")
} else {
    document.getElementById('result').innerHTML = ("Il risultato è pari")
}
