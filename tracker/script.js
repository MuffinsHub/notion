// Kommentar
//* Highlight
//! Achtung
//? Fragestellung
// TODO

//document.addEventListener("DOMContentLoaded", function() {
    //sorgt dafür, dass alle relevanten Inhalte geladen sind, bevor versucht wird sie zu benutzen
    const year = 2024;
    //erstelle eine Variable für das jeweilige Jahr
    

    const numDays = (y,m) => new Date(y,m,0).getDate();
    // erstellt eine Variable numDays mit den Parametern y und m. => ist eine Kurzfunktion, um eine Funktion zu definieren. newDate erzeugt ein Date-Objekt, indem es die Parameter Jahr und Monat liest. Die 0 bedeutet "0. Tag des Monats", was der letzte Tag des Vormonats ist. getDate macht aus dem Tag des Date-Objekts eine lesbare Zahl. 
    //*---> numDays gibt den letzten Tag des Monats als Zahl aus

    const monthData = [];
    //Array (in Python: Liste), um die Start-und Enddaten zu speichern

    for (let month=0; month < 12; month++) {
        //1. Variable month erstellen und mit 0 initialisieren. Dank let ist die Variable nur innerhalb dieses Blocks vorhanden (im Gegensatz zu const).2. Bedingung, die bestimmt, ob die Schleife weiter ausgeführt wird. -> solange month kleiner als 12 ist, wird die Loop weiter ausgeführt. 3. Inkrementierung: die Kontrollvariable month wird nach jedem Durchlauf erhöht.

        const startDay = new Date(year, month, 1).getDay();
        //erstellt eine Variable, die ein Date-Objekt vom 1. Tag des Monats erstellt. getDay gibt den Wochentag als Zahl zwischen 0-6 aus.
        const endDay = new Date(year, month, numDays(year, month + 1)).getDay();
        //month + 1, damit iterierbar. Erstellt eine Variable, die ein Date-Objekt vom letzten Tag des Monats erstellt. getDay s.o.
        const daysInMonth = numDays(year, month + 1)
        // erstellt eine Variable, die die Anzahl der Tage als Int. beinhaltet
        const adjustedStartDay = (startDay===0) ? 6: startDay -1;
        //! Um den Kalender Sonntag oder Montag beginnen zu lassen??


        // Start- und Endtag sowie die Anzahl der Tage werden im Array gespeichert
        monthData.push({
            month: month + 1,  // Monat (1-12)
            startDay: adjustedStartDay,  // Angepasster Start-Wochentag
            endDay: endDay,  // End-Wochentag
            daysInMonth: daysInMonth  // Anzahl der Tage im Monat
        });
    }



    //! Ausgabe der Daten zur Kontrolle
    console.log(monthData);

    function renderMonth(monthData) {
        const daysContainer = document.getElementById('days-container');
        
        // sucht nach days-container und löscht den Inhalt durch einen leeren String
    

        for (let i = 0; i < monthData.startDay; i++) {
            const emptyDiv = document.createElement('div');
            emptyDiv.classList.add('empty-day');
            daysContainer.appendChild(emptyDiv);
        // monthData.startDay gibt an, an welchem Wochentag der 1. des Monats ist. i ist die Kontrollvariable, die mit jedem Durchgang um 1 erhöht wird, bis monthData.startDay -1 erreicht ist. Für jeden Durchgang (= Tag des Vormonats) wird ein neues Div-Element (emptyDiv) erstellt. Das emptyDiv wird einer CSS-Klasse "empty-day" hinzugefügt, damit es sich später stylen lässt. 

        }
    
        // Füge die Tage des Monats hinzu
        for (let day = 1; day <= monthData.daysInMonth; day++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('day');
            dayDiv.textContent = day;
            daysContainer.appendChild(dayDiv);
        //day = Kontrollvariable, darf kleiner oder gleich der Anzahl der Tage im Monat sein, wird in jedem Durchgang erhöht. Für jeden Tag im Monat wird ein div-Element erstellte, welches der Klasse "day" hinzugefügt wird (fürs Styling)

        }
    }

    const currentMonthIndex = new Date().getMonth();
    //deklariert Variable mit dem Monat als Inhalt


    function habit_done() {
        const currentDate= new Date();
        const currentDay = currentDate.getDate();
        const dayDivs = document.querySelectorAll(".day");

        dayDivs.forEach(dayDiv => {
            if (parseInt(dayDiv.textContent) === currentDay) {
                dayDiv.style.backgroundColor = "#ff5722"; // Ändert den Hintergrund zu Orange
                dayDiv.style.borderRadius = "50%"; // Macht es zu einem Kreis
                dayDiv.style.color = "white"; 


            }
        })

    }

renderMonth(monthData[currentMonthIndex])   




