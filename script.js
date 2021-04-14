// Variablen
var anzahlBilder = 39;
var aktuellesBild = 0;

// Zeige Bild auf den Koordinaten (w, h)
function bildAnzeigen(w, h) {

    // Das alte Bild löschen
    if (document.getElementById("bild") != null) {
        document.body.removeChild( document.getElementById("bild") );
    }

    // Ein neues Bild erstellen
    var bild = document.createElement('img');

    // Den korrekten Link zum Bild angeben
    bild.src = "bilder/" + aktuellesBild.toString() + ".jpg";

    // Ein "alt" Attribut angeben (wichtig für Screenreader für Sehgeschädigte)
    bild.alt = "kuermis, Zacharias D. Schlecht";

    // Dem Bild eine ID geben
    bild.id = "bild";

    // Das Bild positionieren
    bild.style.marginLeft = w.toString() + "px";
    bild.style.marginTop = h.toString() + "px";

    //Breite des Bildes auf 20% des Bildschirms begrenzen
    bild.style.width = "25%";

    // Das Bild dem HTML-Dokument hinzufügen
    document.body.appendChild(bild);
}


// Warte auf Klick und zeige ein Bild an
document.addEventListener("click", function(event){
    // event.clientX und -Y geben die Koordinaten der Maus beim Klick an
    bildAnzeigen(event.clientX, event.clientY);
    
    // Gleich auf das nächste Bild verweisen
    // das % bedeutet "modulus"
    aktuellesBild = (aktuellesBild + 1) % anzahlBilder;
}); 