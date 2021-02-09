import { useJournalEntries, getEntries } from "./JournalDataEntry.js"
import { Entry } from "./JournalEntry.js"

const entryLog = document.querySelector(".largeEntries")

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