import { useJournalEntries, getEntries } from "./JournalProvider.js"
import { Entry } from "./JournalEntry.js"

const entryLog = document.querySelector(".largeEntries")
const eventHub = document.querySelector("#container")


eventHub.addEventListener("journalStateChanged", event => {
    EntryListComponent()
})

export const EntryListComponent = () => {
    getEntries()
    .then(() => {
        const entries = useJournalEntries()
        render(entries)
    })
}

const render = (entries) => {
    let entryHTMLrep = ""
    for (const entry of entries) {
        entryHTMLrep += Entry(entry)
        
        entryLog.innerHTML = `
        <section class="entries">
        ${entryHTMLrep}
        </section>
        `
    }
}