// import { Button, Fab, TextField } from "@mui/material";
// import { connect } from "react-redux";
// import { useNavigate } from "react-router";
// import { Post } from "../../action/CustomerOfEvent";
// import AddIcon from "@mui/icons-material/Add";

// const AddParticipate = (props) => {
//   let nav = useNavigate();
//   let participate = {
//     Name: "",
//     Email: "",
//     Phone: "",
//     CelebrationId: props.cel,
//     Status: false,
//   };
//   HEAD;
//   const [errors, setErrors] = useState({
//     Name: false,
//     Email: false,
//     Phone: false,
//   });
//   // let participate = {
//   //   Name: "",
//   //   Email: "",
//   //   Phone: "",
//   //   CelebrationId: props.cel,
//   //   Status: false,
//   // };
// };
// const change = (e) => {
//   let { name, value, type } = e.target;
//   if (type === "number") value = +value;
//   participate[name] = value;
// };
// HEAD;
// const end = () => {
//   alert("האירוע נוצר בהצלחה");
//   nav("/homePage");
// };

// const addParticipateToClient = () => {
//   if (!validate()) return;
//   setPartList([...partList, p]);
//   setP({
//     Name: "",
//     Email: "",
//     Phone: "",
//     CelebrationId: props.cel,
//     Status: false,
//   });
//   props.Post(p);
// };

// const validate = () => {
//   const validName = new RegExp("^[a-zA-Z0-9._:$!%-]$.{6,}");
//   const validEmail = new RegExp(
//     "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
//   );
//   const validPhone = new RegExp("^[0-9].{10}");
//   if (validName.test(p.Name) == false) {
//     const newErrors = { ...errors };
//     newErrors["Name"] = true;
//     setErrors(newErrors);
//     return false;
//   }
//   if (validEmail.test(p.Email) == false) {
//     const newErrors = { ...errors };
//     newErrors["Email"] = true;
//     setErrors(newErrors);
//     return false;
//   }

//   if (validPhone.test(p.Phone) == false) {
//     const newErrors = { ...errors };
//     newErrors["Phone"] = true;
//     setErrors(newErrors);
//     return false;
//   }
//   return true;
// };

// const addParticipate = () => {
//   props.Post(participate);
// };
// const addParticipate2 = () => {
//   addParticipate();
//   alert("האירוע נוצר בהצלחה");
//   nav("/homePage");
// }
// return (
//   <>
//     <h2>2 / 2</h2>
//     <h4> הוספת משתתפים</h4>
//     <form role="form">
//       <TextField
//         name="Name"
//         id="outlined-basic"
//         label="שם משתתף"
//         variant="outlined"
//         onChange={change}
//       />
//       <TextField
//         name="Email"
//         type="email"
//         id="outlined-basic"
//         label="מייל"
//         variant="outlined"
//         onChange={change}
//       />
//       <TextField
//         name="Phone"
//         id="outlined-basic"
//         label="טלפון"
//         variant="outlined"
//         onChange={change}
//       />

//       <Button variant="contained" onClick={addParticipate}>
//         <Fab color="primary" aria-label="add">
//           <AddIcon />
//         </Fab>
//       </Button>
//       {/* <button
//           type="button"
//           className="btn btn-default"
//           onClick={addParticipate}
//         >
//           +
//         </button> */}
//       <br />
//       {/* <div className="form-group">
//           <label>מייל</label>
//           <input
//             type="email"
//             name="Email"
//             className="form-control"
//             placeholder="הכנס מייל"
//             onChange={change}
//           />
// <<<<<<< HEAD
//         </div>
//         <div className="form-group">
//           <label>טלפון</label>
//           <input
//             type="text"
//             name="Phone"
//             className="form-control"
//             placeholder="הכנס טלפון"
//             value={p.Phone}
//             onChange={change}
//           />
//         </div>
//         <button
//           type="button"
//           className="btn btn-default"
//           onClick={addParticipateToClient}
//         >
//           +
//         </button>
//         <br />
//         <button type="button" className="btn btn-default" onClick={end}>
//           המשך
//         </button>

//         {errors.Email && <p>יש שגיאה בכתובת האימייל</p>}
// =======
//         </div> */}
//       <Button variant="contained" onClick={addParticipate2}>
//         המשך
//       </Button>
//     </form>
//   </>
// )
      
// const mapStateToProps = (state) => {
//   return {
//     cel: state.currentEvent,
//   };
// };
// export default connect(mapStateToProps, { Post })(AddParticipate);
