function ItemToEvent(id, eventId, amount, customerId,tobetaken) {
    this.id = id;
    this.eventId = eventId;
    this.amount = amount;
    this.describe = describe;
    this.customerId=customerId;
    this.tobetaken=tobetaken;
}
const itemToEvent=[
    new ItemToEvent(1,1,5,"cake",1,true),
    new ItemToEvent(2,2,5,"glass",2,true)
 ]

module.exports ={itemToEvent};