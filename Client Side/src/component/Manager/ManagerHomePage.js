import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AddCategory } from "../../action/Category";
import { AddList } from "../../action/TypeEvent";
import { getCategoriesAction } from "../../action/Category";

const ManagerHomePage = (props) => {
  let nav = useNavigate();
  const goToLists = (e) => {
    nav("category/" + e.target.name)
  };
  let category = {
    Name: "",
    Describe: "",
  };
  const change = (e) => {
    let { name, value } = e.target;
    category[name] = value;
  };
  const addCategory = () => {
    props.AddCategory(category);
  };

  return (
    <>
      <h1> מנהל דף הבית </h1>
      {props.categories.map((c) => (
        <div className="dropdown">
          <button key={c.Id} name={c.TypeId} className="dropbtn" onClick={goToLists}>
            {" "}
            {c.Name}
          </button>
        </div>
      ))}
      <h3>הוספת קטגוריה</h3>
      <form className="warp">
        <br />
        <input name="Name" type="text" placeholder={"שם"} onChange={change} />
        <input
          name="Describe"
          type="text"
          placeholder={"תיאור"}
          onChange={change}
        />
        <input
          type="button"
          value={"add a new category"}
          onClick={addCategory}
        />
      </form>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    currentType: state.currentType,
    user: state.currentUser,
  };
};
export default connect(mapStateToProps, {
  getCategoriesAction,
  AddCategory,
  AddList,
})(ManagerHomePage);
