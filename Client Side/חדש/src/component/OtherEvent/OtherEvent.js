
const OtherEvent = () => {
   return (
      <>
         <h1>הוספת אירוע אחר</h1>
         <input type="text" name="describe" placeholder="תיאור חופשי" maxLength="120" /><br /><br />
         <textarea className="form-control" rows="3" placeholder="הוסף הערה"></textarea>
         <input type="button" value="שלח לאישור המנהל" />
      </>
   )
}
export default OtherEvent;
