const eventHub = document.querySelector("#container")

let journal = []

//returns copy of entries sorted by the date---------------------------------
export const useJournalEntries = () => {
    //iterates through journal entry array
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) => { 
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
        })
    return sortedByDate
}
//gets entries from API---------------------------------------------------------
export const getEntries = () => {
    return fetch("http://localhost:8088/entries?_expand=mood")
    .then(response => response.json())
    .then(
        parsedEntries => {
            journal = parsedEntries
        })
}

//saves entries to API and brings have new list of updated entries---------------
export const saveEntry = (entry) => {
    return fetch("http://localhost:8088/entries", {
        //post method saves entries to API
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        //stringify parses objects into raw data for API
        body: JSON.stringify(entry)
    })
        //get updated entries from API
        // .then(getEntries)  
        //invoke this function
        .then(dispatchStateChangeEvent)  
}


export const deleteEntry = (entryID) => {
    return fetch(`http://localhost:8088/entries/${entryID}`, {
        method: "DELETE"
    })
        .then(getEntries)
        .then(dispatchDeleteStateChange)
}

//creates customEvent that dispatches when entries are saved to API-----------------
const dispatchStateChangeEvent = () => {
    eventHub.dispatchEvent(new CustomEvent("journalStateChanged"))
}


const dispatchDeleteStateChange = () => {
    eventHub.dispatchEvent(new CustomEvent("deleteStateChanged"))
}