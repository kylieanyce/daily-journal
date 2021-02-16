import { EntryListComponent } from "./JournalEntryList.js"
import { saveEntry, useJournalEntries } from "./JournalProvider.js"
import { useMoods } from "./MoodProvider.js"


const contentTarget = document.querySelector(".largeForm__smallForm")
const eventHub = document.querySelector("#container")

//listens for click event and checks if it's "submit form"-----------------------
eventHub.addEventListener("click", event => {
    //if button clicked id matches "formButton", continue
    if (event.target.id === "formButton") {
        event.preventDefault()
        //creates vars for values to be put into
        //grabs elements on index.html by id and puts value into var
        const date = document.getElementById("journalDate").value
        const concept = document.getElementById("journalConcept").value
        const text = document.getElementById("journalEntry").value
        const mood = parseInt(document.getElementById("mood").value)
        //creates new object
        const newEntry = {
            //creates new keys and puts vars into properties
            "date": date,
            "concept": concept,
            "text": text,
            "moodId": mood
        }
        //passes new object into saveEntry function
        saveEntry(newEntry)
    }
})

//grabs mood info from API and sends to render function--------------------------
export const EntryForm = () => {
        //copies array of moods
        const allMoods = useMoods()
        render(allMoods)
}

//creates HTML for form and sends to DOM--------------------------------------------
const render = (allMoods) => {
    //takes mood array as an argument and maps through array
    //for each object, returns an <option> html for each mood
    contentTarget.innerHTML = `
        <fieldset class="form">
            <label class="formCard" for="journalDate">Date of entry</label>
            <input class="formCard" type="date" name="journalDate" id="journalDate">

            <label class="formCard" for="concepts">Topics Covered</label>
            <input class="formCard" type="text" id="journalConcept">

            <label class="formCard" for="journalEntry">Write Here</label>
            <textarea class="formCard" name="journalEntry" id="journalEntry" cols="30" rows="10"></textarea>
            
            <label class="formCard" for="mood">Mood</label>
            <select class="formCard" name="mood" id="mood">
            ${
                allMoods.map(
                    (mood) => {
                        return `<option value="${ mood.id }">${ mood.label }</option>`
                    }
                ).join("")
            }
            </select>

            <div><button id="formButton" class="button">Submit Entry</button></div>
        </fieldset>
    `
}




