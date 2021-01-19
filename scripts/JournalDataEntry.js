const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Happy"
    },
    {
        id: 2,
        date: "07/26/2025",
        concept: "Javascript",
        entry: "We learned about Javascript functions and array methods.",
        mood: "Confused"
    },
    {
        id: 3,
        date: "07/28/2025",
        concept: "Javascript and CSS",
        entry: "We talked about how to style elements after using Javascript.",
        mood: "Accomplished"
    }
]
export const journalDataCollection = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) => 
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    console.log(sortedByDate)
    return sortedByDate
}