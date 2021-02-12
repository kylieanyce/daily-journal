import { saveEntry } from "./JournalProvider.js"
import { getMoods , useMoods } from "./MoodProvider.js"

const contentTarget = document.querySelector(".largeForm__smallForm")
const eventHub = document.querySelector("#container")

eventHub.addEventListener("click", event => {
    if (event.target.id === "formButton") {
        event.preventDefault()

        const date = document.getElementById("journalDate").value
        const concept = document.getElementById("journalConcept").value
        const text = document.getElementById("journalEntry").value
        const mood = document.getElementById("mood").value

        const newEntry = {
            "date": date,
            "concept": concept,
            "text": text,
            "mood": mood
        }
        saveEntry(newEntry)
    }
})

export const EntryForm = () => {
    getMoods()
    .then(() => {
        const allMoods = useMoods()
        render(allMoods)
    })
}

const render = (allMoods) => {
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




