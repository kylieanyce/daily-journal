const contentTarget = document.querySelector(".largeForm__smallForm")

const render = () => {
    contentTarget.innerHTML = `
        <fieldset>
            <label for="journalDate">Date of entry</label>
            <input type="date" name="journalDate" id="journalDate">

            <label for="concepts">Topics Covered</label>
            <input type="text">

            <label for="journalEntry">Write Here</label>
            <textarea name="journalEntry" id="journalEntry" cols="30" rows="10"></textarea>
            
            <label for="mood">Mood</label>
            <select name="mood" id="mood">
                <option value="happyOption">Happy</option>
                <option value="caffeinatedOption">Caffeinated</option>
                <option value="sleepyOption">Sleepy</option>
                <option value="exhaustedOption">Exhausted</option>
                <option value="accomplishedOption">Accomplished</option>
                <option value="overwhelmedOption">Overwhelmed</option>
                <option value="confusedOption">Confused</option>
                <option value="intelligentOption">Intelligent</option>
            </select>

            <button>Submit Entry</button>
        </fieldset>
    `
}

export const EntryForm = () => {
    render()
}


