
// 'use strict';
// // Selezioniamo il contenuto di un paragrafo
// console.log ( document.querySelector (".message").textContent);
// // Cambiamo il contenuto del paragrafo
// 
// // Stampando in console, questo sarà il nuovo vontenuto del paragrafo
// console.log ( document.querySelector (".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 20;

// document.querySelector (".guess").value = 23;
// console.log (document.querySelector (".guess").value);
// const numberSecret = Math.trunc(Math.random()*20)+1; // Creiamo un numero compreso tra 1 e 20 , con una sola cifra decimale 
// let  score = 20; // vite





let numberSecret = Math.trunc(Math.random()*20)+1
score = 20;
let highscore=0;


document.querySelector(".check").addEventListener("click", function() {
  const guess =  Number (document.querySelector(".guess").value);
  console.log(guess)
 


// When there is not input 
if (!guess) {
    document.querySelector(".message").textContent = "No Number!"
  
}
else if (guess === numberSecret) {
    document.querySelector(".message").textContent = " Correct Number!"
    document.querySelector("body").style.backgroundColor = '#60b347';

    document.querySelector(".number").style.width = "30rem"
    document.querySelector(".number").textContent = numberSecret
    document.querySelector(".message").textContent = " Hai vinto!"

    if (score > highscore) {
        highscore=score;
        // controlliamo se il nostro punteggio è maggiore del punteggio attuale, in quel caso lo trasformiamo nel nuovo record
        document.querySelector(".highscore").textContent = highscore
    }

}

else if (guess > numberSecret) {
    if (score > 1) {

    document.querySelector(".message").textContent = " Too High!"
    score--;
    document.querySelector(".score").textContent = score
    } else {
        document.querySelector(".message").textContent = "You lost the game!"
        document.querySelector(".score").textContent = 0
    }

}
else if (guess < numberSecret) {
    if (score > 1) {

        document.querySelector(".message").textContent = " Too Low!"
        score--;
        document.querySelector(".score").textContent = score
        } else {
            document.querySelector(".message").textContent = "You lost the game!"
            document.querySelector(".score").textContent = 0
        }
    
}


document.querySelector(".again").addEventListener("click",function() {
    score = 20
   numberSecret = Math.trunc(Math.random()*20)+1
   document.querySelector(".message").textContent = " Start guessing...!"
   document.querySelector(".score").textContent=score
   document.querySelector(".number").textContent = "?";
   document.querySelector(".guess").value = " "
   document.querySelector("body").style.backgroundColor = '#222';

   document.querySelector(".number").style.width = "15rem"

  
   
                
})

})
