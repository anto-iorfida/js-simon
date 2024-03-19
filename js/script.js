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

let timer = 6;
textContainer.innerHTML = timer;

const clock = setInterval(function() {
    timer--;
    textContainer.innerHTML = timer;
    numGame.innerHTML = num;
    if(timer == 0) {
    
        clearInterval(clock);

        textContainer.innerHTML = 'tempo scaduto';
        numGame.innerHTML = '';
        let numUser = parseInt(prompt('che numeri ti ricordi'));
    }
    
}, 1000);