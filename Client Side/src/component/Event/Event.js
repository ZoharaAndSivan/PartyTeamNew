const Event = (props) => {
  return (
    <>
      <p>
        <label>אתם מוזמנים ל{props.item.Name}</label>
      </p>
      <br />
      <p>
        <label> המתקיים בתאריך {props.item.DateCelebration}</label>
      </p>
      <br />
      <p>
        <label> ב{props.item.Address}</label>
      </p>
      <br />
      <p>{props.item.ImportantText}</p>
      <br />
    </>
  );
};
export default Event;
