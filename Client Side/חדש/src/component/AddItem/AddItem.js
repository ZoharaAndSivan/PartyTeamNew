import { useNavigate } from 'react-router';
import { useRef } from "react";
import { useState } from "react"


const AddItem = () => {

    // const [item,SetItem]=useState([]);

    let fakeItem = useState([
        { name: "חומוס", amount: "5", describe: "חומוס" },
        { name: "ציפס", amount: "7", describe: "ציפס" },
        { name: "קולה", amount: "2", describe: "קולה" },
        { name: "חלב", amount: "1", describe: "חלב" }
    ]
    );

    // SetItem(fakeItem);

    let nav = useNavigate();
    let nameInput = useRef(null);
    let amountInput = useRef(null);
    let describeInput = useRef(null);

    const addItem = () => {
        let item = { name: nameInput.current.value, amount: amountInput.current.value, describe: describeInput.current.value }
        fakeItem = [...fakeItem, item];
        nameInput.current.value = "";
        amountInput.current.value = "";
        describeInput.current.value = "";
        console.log(fakeItem);
        alert("פריט זה התווסף")
    }

    const addItem2 = () => {
        addItem();
        nav("/addNote");
    }
    return (
        <>
            <h2>4 / 3</h2>
            <h4>הוספת פריטים</h4>
            <form role="form">
                <div class="form-group">
                    <label>שם מוצר</label>
                    <input type="text" name="name" class="form-control" placeholder="הכנס שם מוצר" ref={nameInput} />
                </div>
                <div class="form-group">
                    <label>כמות</label>
                    <input type="amount" name="amount" class="form-control" placeholder="הכנס כמות" ref={amountInput} />
                </div>
                <div class="form-group">
                    <label>תיאור</label>
                    <input type="decribe" name="decribe" class="form-control" placeholder="הכנס תיאור" ref={describeInput} />
                </div>
                <p>טיפ מיוחד! אפשרות להוסיף מחיר משוער לכל פריט </p>
                <div class="form-group">
                    <label>מחיר ליחידה</label>
                    <input type="price" name="dicribe" class="form-control" placeholder="הכנס מחיר" />
                </div>
                <button type="button" class="btn btn-default" onClick={() => addItem()} >+</button><br />
                <button type="button" class="btn btn-default" onClick={() => addItem2()}>המשך</button>
            </form>
        </>
    )
}
export default AddItem;