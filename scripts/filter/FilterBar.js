import { getMoods, useMoods } from "../entries/MoodProvider.js"
import { MoodFilter } from "./MoodFilter.js"


const contentTarget = document.querySelector(".filterBar")

let allMoods = []

export const FilterBar = () => {
    // debugger
    getMoods()
    .then(() => {
        allMoods = useMoods()
        render(allMoods)
    })
}

const render = (allMoods) => {
    contentTarget.innerHTML = `
        ${MoodFilter(allMoods)}
    `
}