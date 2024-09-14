// Funzione principale del gioco
function giocoDadi() {
 
  const tiri = parseInt(prompt("Quanti tiri vuoi fare?"), 10);
  
  
  let punteggioGiocatore1 = 0;
  let punteggioGiocatore2 = 0;

 
  function tiraDado() {
      return Math.floor(Math.random() * (6 - 1 + 1) + 1);
  }

  
  for (let i = 0; i < tiri; i++) {
      const tiro1 = tiraDado();  
      const tiro2 = tiraDado();  

      punteggioGiocatore1 += tiro1;
      punteggioGiocatore2 += tiro2;

      console.log(`Tiro ${i + 1}: Giocatore 1 ha ottenuto ${tiro1}, Giocatore 2 ha ottenuto ${tiro2}`);
  }

  // Stampa i punteggi totali
  console.log(`Punteggio totale Giocatore 1: ${punteggioGiocatore1}`);
  console.log(`Punteggio totale Giocatore 2: ${punteggioGiocatore2}`);

  
  if (punteggioGiocatore1 > punteggioGiocatore2) {
      console.log("Il Giocatore 1 ha vinto!");
  } else if (punteggioGiocatore2 > punteggioGiocatore1) {
      console.log("Il Giocatore 2 ha vinto!");
  } else {
      console.log("È un pareggio!");
  }
}

// Esegui il gioco
giocoDadi();
