// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, 
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// creare un array da visualizzare in pagina e che scompare dopo 30 secondi
const num = [33 , 22 , 1 ,62 , 54 , 87];
// far digitare all'user i numeri che ha visualizzato
// creare condizione che dice quanti numeri e quali numeri l'user ha indovinato

const textContainer = document.querySelector('#text');
const numGame = document.querySelector('#num-game')
// inizializzare variabile a 30 che sta per  30 secondi
let timer = 6;
textContainer.innerHTML = timer;
// Mostra i numeri per 30 secondi
const clock = setInterval(function() {
    timer--;
    textContainer.innerHTML = timer;
    numGame.innerHTML = num;
    if(timer == 0) {
    
        clearInterval(clock);

        textContainer.innerHTML = 'tempo scaduto';
        numGame.innerHTML = '';
        setTimeout(() => {
           // Chiede all'utente di inserire i numeri per 5 volte
            const userNum = [];
                for (let i = 0; i < 5; i++) {
                userNum.push(parseInt(prompt("Inserisci un numero:")));
                }
                  // Calcola il punteggio
                 let score = 0;
                for (let i = 0; i < num.length; i++) {
                     if (num.includes(userNum[i])) {
                        score++;
                         }
                }

                // Mostra il risultato
                alert(`Hai indovinato ${score} numeri!`);

         }, 1000);
          
    }

}, 1000);


