import { useEffect, useState } from "react";

const ApproveEvents = () => {
    const [approve, setApprove] = useState([]);
    useEffect(() => {
        //כאן אמורה להיות קריאה לשרת
        const fakeApprove = [
            { name: "מסיבת הודיה", describe: "הגכע" },
        ];
        setApprove(fakeApprove);
    }, [])
    return (
        <>

            <h1>אירועים שטרם אושרו</h1>
            <ul>
                {
                    approve.map(u => {
                        return <div> {u.name} | {u.describe}
                            <input type="button" value="אשר"></input>
                            <input type="button" value="סרב"></input></div>
                    })
                }
            </ul>

        </>
    )
}
export default ApproveEvents;