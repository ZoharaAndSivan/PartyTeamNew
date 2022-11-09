function Event1(id,name, pepoleAmount,typeEventId, address, dateEvent, length, importantText, encodedEvent, inEditingEvent) {
    this.id = id;
    this.name=name;
    this.pepoleAmount = pepoleAmount;
    this.address = address;
    this.dateEvent = dateEvent;
    this.length = length;
    this.importantText = importantText;
    this.typeEventId = typeEventId;
    this.encodedEvent = encodedEvent;
    this.inEditingEvent = inEditingEvent;
}


export default Event1;