// Array mit Emojis definieren Windows-Taste + .
const emojis = ["😁","😁","❤️","❤️","😘","😘","🤢","🤢","😶‍🌫️","😶‍🌫️","🥶","🥶","👽","👽","💩","💩"];
let playerName = ''; // Variable zum Speichern des Spielernamens
let rounds = 0; // Variable zum Speichern der Anzahl der gespielten Runden



// Funktion zum Starten des Spiels
function startGame() {
    // Überprüfen, ob ein Name bereits gesetzt ist
    if (!playerName) {
        playerName = prompt("Bitte gib deinen Namen ein:");
    }
    document.querySelector('.player-name').innerText = `Spieler: ${playerName}`;
    
    // Array mit zufällig sortierten Emojis erstellen
    var shuf_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);

    // Spielfelder leeren
    document.querySelector('.game').innerHTML = '';

    // Schleife zum Erstellen der Spielfelder
    for (var i = 0; i < emojis.length; i++){
        // Div-Element für jedes Spielfeld erstellen
        let box = document.createElement('div')
        box.className = 'item'; // CSS-Klasse für Styling hinzufügen
        box.innerHTML = shuf_emojis[i]; // Emoji in das Spielfeld einfügen

        // Eventlistener für das Klicken auf das Spielfeld hinzufügen
        box.onclick = function(){
            this.classList.add('boxOpen'); // Dem angeklickten Spielfeld eine Klasse hinzufügen

            // Verzögerungsfunktion für das Vergleichen der offenen Spielfelder
            setTimeout(function(){
                if(document.querySelectorAll('.boxOpen').length > 1){
                    // Wenn zwei Spielfelder geöffnet sind
                    if(document.querySelectorAll('.boxOpen')[0].innerHTML == 
                    document.querySelectorAll('.boxOpen')[1].innerHTML){

                        // Wenn die beiden geöffneten Spielfelder identisch sind
                        document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch'); // Klasse für übereinstimmende Spielfelder hinzufügen
                        document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');

                        // Geöffnete Spielfelder schließen
                        document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                        document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

                        // Überprüfen, ob alle Spielfelder übereinstimmen und das Spiel gewonnen ist
                        if(document.querySelectorAll('.boxMatch').length == emojis.length){
                            alert('Gewonnen!'); // Benachrichtigung über den Gewinn anzeigen
                        }

                    } else {
                        // Wenn die geöffneten Spielfelder nicht übereinstimmen
                        document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen'); // Geöffnete Spielfelder schließen
                        document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                    }
                }
            },500) // Zeitverzögerung für die Überprüfung der offenen Spielfelder
        }

        // Spielfeld dem HTML-Element mit der Klasse 'game' hinzufügen
        document.querySelector('.game').appendChild(box);
    }
}

// Funktion zum Ändern des Namens
function changeName() {
    playerName = prompt("Bitte gib deinen neuen Namen ein:");
    document.querySelector('.player-name').innerText = `Spieler: ${playerName}`;
}

// Funktion zum Herunterladen des Spiels als ZIP
function downloadGameAsZip() {
    let zip = new JSZip();
    zip.file("../pages/memory.html", document.documentElement.outerHTML);
    zip.file("../styles/styleMike.css", "/* Dein CSS-Code hier */");
    zip.file("../js/java.js", document.querySelector('script[src="java.js"]').innerHTML);

    zip.generateAsync({type: "blob"}).then(function(content) {
        saveAs(content, "memory-game.zip");
    });
}

// Eventlistener für den Neustart-Button hinzufügen
document.querySelector('.reset').addEventListener('click', function() {
    rounds++; // Anzahl der Runden erhöhen
    document.querySelector('.rounds').innerText = `Runden: ${rounds}`;
    startGame();
});

// Eventlistener für den Namensänderungs-Button hinzufügen
document.querySelector('.change-name').addEventListener('click', changeName);

// Eventlistener für den Download-Button hinzufügen
document.querySelector('.download-zip').addEventListener('click', downloadGameAsZip);

// Spiel beim Laden der Seite starten
startGame();
