const contentTarget = document.querySelector(".largeForm__smallForm")

const render = () => {
    contentTarget.innerHTML = `
        <fieldset class="form">
            <label class="formCard" for="journalDate">Date of entry</label>
            <input class="formCard" type="date" name="journalDate" id="journalDate">

            <label class="formCard" for="concepts">Topics Covered</label>
            <input class="formCard" type="text">

            <label class="formCard" for="journalEntry">Write Here</label>
            <textarea class="formCard" name="journalEntry" id="journalEntry" cols="30" rows="10"></textarea>
            
            <label class="formCard" for="mood">Mood</label>
            <select class="formCard" name="mood" id="mood">
                <option value="happyOption">Happy</option>
                <option value="caffeinatedOption">Caffeinated</option>
                <option value="sleepyOption">Sleepy</option>
                <option value="exhaustedOption">Exhausted</option>
                <option value="accomplishedOption">Accomplished</option>
                <option value="overwhelmedOption">Overwhelmed</option>
                <option value="confusedOption">Confused</option>
                <option value="intelligentOption">Intelligent</option>
            </select>

            <div class="formButton"><button class="button">Submit Entry</button></div>
        </fieldset>
    `
}

export const EntryForm = () => {
    render()
}


