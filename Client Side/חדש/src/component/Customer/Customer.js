import "./Customer.css";
const Customer = (props) => {
    return (<>
        <td>{props.item.name}</td>
        <td>{props.item.phone}</td>
        <td>{props.item.email}</td>
    </>)
}
export default Customer;