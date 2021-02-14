import { useJournalEntries } from "./JournalProvider.js"

const eventHub = document.querySelector("#container")

//HTML for journal entries--------------------------------------------------------
export const Entry = (entry) => {
    //grabs date from entry object and converts into US date form (mm/dd/xxxx)
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div class="largeEntries__header">
                <h2>${entry.concept}</h2>
            </div>
            <div class="largeEntries__smallEntries">
                <div class="entryCard">
                    <p>${new Date(entry.date).toLocaleDateString('en-US')}</p>
                    <p>${entry.text}</p>
                    <p>${entry.mood.label}</p>
                    <button class="deleteEntry" id="delete--${entry.id}">Delete</button>
                </div>
            </div>
        </section>
    `
}

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteEntry--")) {
        const [prefix, entryID] = event.target.id.split("--")
        const deleteClicked = new CustomEvent("deleteEntryClicked", {
            detail: {
                entryId: event.target.entryID
            }
        })
        dispatchEvent(deleteClicked)
        deleteEntry(entryID).then(
            () => {
                const updatedEntries = useJournalEntries()
                render(updatedEntries)
            }
        )
    }
})