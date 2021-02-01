export const Entry = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="largeEntries__header">
                <h2>${entry.concept}</h2>
            </div>
            <div class="largeEntries__smallEntries">
                <div class="entryCard">
                    <p>${entry.date}</p>
                    <p>${entry.text}</p>
                    <p>${entry.mood}</p>
                </div>
            </div>
        </section>
    `
}