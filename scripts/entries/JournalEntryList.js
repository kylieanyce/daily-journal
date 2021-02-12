import { useJournalEntries, getEntries } from "./JournalProvider.js"
import { Entry } from "./JournalEntry.js"

const entryLog = document.querySelector(".largeEntries")
const eventHub = document.querySelector("#container")

//listens for when "submit entry" button is clicked----------------------------------
eventHub.addEventListener("journalStateChanged", event => {
    EntryListComponent()
})

//gets entry list from API and sends to render function------------------------------
export const EntryListComponent = () => {
    getEntries()
    .then(() => {
        const entries = useJournalEntries()
        render(entries)
    })
}

//renders to DOM-------------------------------------------------------------------
const render = (entries) => {
    //creates new empty var for objects to be put into while looping
    let entryHTMLrep = ""
    //loops through array
    for (const entry of entries) {
        //passes each object into Entry function that converts to HTML
        entryHTMLrep += Entry(entry)
        //creates section for array of objects converted to HTML to go
        entryLog.innerHTML = `
        <section class="entries">
        ${entryHTMLrep}
        </section>
        `
    }
}