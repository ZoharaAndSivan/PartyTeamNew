import { useNavigate } from 'react-router';
import "./HomePage.css";
import a from "./חופה.jpg"
import b from "./יומולדת.jpg"
import c from "./מסיבה.jpg"
import d from "./נחל-כזיב-גליל.jpg"

const HomePage = () => {
   let nav = useNavigate();

   const passToType = () => {
      nav("/advert")
   }
   return (
      <>
         {/* <h1>דף הבית </h1> */}
         {/* <div className="warp">
            <div className="block" onClick={passToType}><img src={c} /></div>
            <div className="block" onClick={passToType}><img src={a} /></div><br/>
            <div className="block" onClick={passToType}><img src={d} /></div>
            <div className="block" onClick={passToType}><img src={b} /></div>
         </div> */}
      </>
   )
}
export default HomePage;