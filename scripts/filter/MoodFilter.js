const eventHub = document.querySelector("#container")


export const MoodFilter = (allMoods) => {
    return `
        <fieldset class="fieldset">
            <legend>Filter Journal Entries by Mood</legend>
            ${
                allMoods.map(
                    (mood) => {
                        return `<input type="radio" name="moodFilter" value="${ mood.id }"/>
                        <label for="moodFilter--${mood.label}">${ mood.label }</label>
                        `
                    }
                ).join("")
            }
        </fieldset>
        `
}


eventHub.addEventListener("change", event => {
    if (event.target.name.startsWith("moodFilter")) {
        const moodID = event.target.value
        const moodSelected = new CustomEvent("moodSelect", {
            detail: {
                moodid: moodID
            }
        })
        dispatchEvent(moodSelected)
    }
})
