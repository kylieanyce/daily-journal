import { useJournalEntries } from "./JournalDataEntry.js"
import { Entry } from "./JournalEntry.js"

const entryLog = document.querySelector(".largeEntries")

export const EntryListComponent = () => {
    
    const entries = useJournalEntries()

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