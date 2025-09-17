// Milestone 1
// Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: concentriamoci su HTML e CSS riproducendo una singola fotografia 
// (usiamo una qualunque immagine a piacimento)

// Milestone 2
// Utilizzando Postman, testiamo una chiamata a questo endpoint: 
// https://lanciweb.github.io/demo/api/pictures/
// Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

// Milestone 3
// Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

// output
const printCard = document.getElementById("row");

// chiamata ajax
axios.get("https://lanciweb.github.io/demo/api/pictures/")
    .then(cards => {
        const arrayCard = cards.data;
        // variabile di accumulo
        let cardString = "";
        // ciclo array
        arrayCard.forEach(card => {
            // inserisce elementi nella variabile
            cardString += `<div class="card">
                    <div class="container-img">
                        <img src="img/pin.svg" alt="pin" class="pin">
                        <img src="${card.url}" alt="${card.id}" class="img-main">
                    </div>
                    <p class="data">${card.date}</p>
                    <h3 class="titolo">${card.title}</h3>
                </div>`

        })
        // stampa a schermo tutte le card
        printCard.innerHTML = cardString;
    })
    .catch(error => {
        console.error(error)
    })