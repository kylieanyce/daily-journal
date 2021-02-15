import { EntryListComponent } from "./entries/JournalEntryList.js";
import { EntryForm } from "./entries/JournalForm.js";
import { getEntries } from "./entries/JournalProvider.js";
import { getMoods } from "./entries/MoodProvider.js";

EntryListComponent()
getEntries()
    .then(getMoods)
    .then(EntryForm)
