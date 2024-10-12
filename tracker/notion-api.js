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
