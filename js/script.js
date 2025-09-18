// Milestone 1
// Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.

// Milestone 2
// Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .
// Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
// Cliccando invece il button di chiusura, l’overlay scompare nuovamente.

// Milestone 3
// Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
// Ci sono diversi modi di farlo, prova a sperimentare 🙂

// Bonus
// Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi e la loro ombra aumenta, il tutto in manierà fluida. 
// Inoltre il mouse diventa un puntatore, per far capire all’utente che può cliccare

// selezione degli elementi di pagina
const printCard = document.getElementById("row");
const overlayOn = document.getElementById("overlay-id");
const overlayImg = document.getElementById("img-overlay-id");
const btn = document.getElementById("btn-overlay-id")

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

        const cardItems = document.querySelectorAll(".card");
        // ciclo card
        cardItems.forEach(cardItem => {
            // evento che al click della card compare l'overlay
            cardItem.addEventListener("click", () => {
                // cambia il display all'overlay
                overlayOn.style.display = "block";
                // prede url dell'immagine cliccata
                const imgSrc = cardItem.querySelector(".img-main").src;
                // cre un elemento img e lo inserisce in pagina
                overlayImg.innerHTML = `
                    <img src="${imgSrc}" class="img-overlay-class">
                `;

            });
        });

        // evento che al click del pulsante scompare l'overlay
        btn.addEventListener("click", () => {
            overlayOn.style.display = "none";
        })

    })
    .catch(error => {
        console.error(error)
    })