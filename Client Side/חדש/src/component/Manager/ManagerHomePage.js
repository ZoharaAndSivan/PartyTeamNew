import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const ManagerHomePage = (props) => {
    let nav = useNavigate();

    return (
        <>
            <div className="warp"><h1> מנהל  דף הבית </h1>
            </div>
        </>
    )
}
export default ManagerHomePage;