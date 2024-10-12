// Beispiel für die Verwendung der Notion API in deinem Script
const notionToken = "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";
const databaseId = "11dd2b6860e7803fafead5ff46bf098f";

async function habitDone(date) {
    const response = await fetch("https://api.notion.com/v1/pages", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${notionToken}`,
            "Content-Type": "application/json",
            "Notion-Version": "2022-06-28"
        },
        body: JSON.stringify({
            parent: { database_id: databaseId },
            properties: {
                Name: { title: [{ text: { content: date.toDateString() } }] },
                Status: { select: { name: "Done" } },
            }
        })
    });

    const data = await response.json();
    console.log("Habit done on:", date, "Response:", data);
}

// Verwende den Button, um die Funktion auszuführen
document.getElementById("habit-button").addEventListener("click", function() {
    const today = new Date();
    habitDone(today);
});


// Hier fügst du deinen Notion API Token ein
const NOTION_API_TOKEN = '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';
// Hier fügst du die Datenbank-ID ein
const DATABASE_ID = '11dd2b6860e7803fafead5ff46bf098f';

// Beispiel für einen einfachen GET-Aufruf, um die Inhalte der Datenbank abzurufen
async function fetchNotionData() {
    const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
        method: 'POST',  // Notion verwendet für Abfragen die POST-Methode
        headers: {
            'Authorization': `Bearer ${NOTION_API_TOKEN}`,
            'Content-Type': 'application/json',
            'Notion-Version': '2022-06-28'
        }
    });

    // Antwort als JSON verarbeiten
    const data = await response.json();
    console.log(data);  // Die abgerufenen Daten werden in der Konsole angezeigt
}

// Teste die Verbindung, indem du die Daten abfragst
fetchNotionData();
