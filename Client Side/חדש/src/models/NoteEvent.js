function NoteEvent(id, eventId, toshow, note) {
    this.id = id;
    this.eventId = eventId;
    this.toshow = toshow;
    this.note = note;
}

const noteEvent=[
    new NoteEvent(1,1,true,"להזצין זר"),
    new NoteEvent(2,1,true ,"להזמין עוגה")
]

module.exports ={noteEvent};