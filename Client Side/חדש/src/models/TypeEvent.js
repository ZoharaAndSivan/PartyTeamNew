function TypeEvent(id, name, status) {
   this.id = id;
   this.name = name;
   this.status = status;
}
const typeEvent = [
   new TypeEvent(1, "trip", true),
   new TypeEvent(2, "wedding", true)
]

module.exports = { typeEvent };