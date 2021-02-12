let moods = []

export const useMoods = () => {
    return moods.slice()
}

//gets moods from API------------------------------------------------
export const getMoods = () => {
    return fetch("http://localhost:8088/moods")
    .then(response => response.json())
    .then(parsedMoods => moods = parsedMoods)
}