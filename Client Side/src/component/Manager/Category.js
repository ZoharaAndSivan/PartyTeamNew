import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTypes, AddList } from "../../action/TypeEvent";
import { useEffect } from "react";
import { updateCategoryName } from "../../action/Category";

const Category = (props) => {
  let { id } = useParams();
  let category = { ...props.categories.find((x) => x.TypeId == id) };
  console.log(category);
  let nav = useNavigate();
  useEffect(() => {
    props.getTypes(id);
  }, []);
  let list = {
    Name: "",
    Describe: "",
    CategoryId: props.category,
  };
  const addList = () => {
    props.AddList(list);
    alert("הרשימה נוספה" + list.Name);
  };
  const goToList = (e) => {
    nav("/listActions/" + e.target.name);
  };
  const change = (e) => {
    let { name, value } = e.target;
    list[name] = value;
  };
  const changeCategory = (e) => {
    let { name, value } = e.target;
    category[name] = value;
  };
  const edit = () => {
    props.updateCategoryName(category);
    alert("Updated category");
  };
  return (
    <><br/>
      <input
        type="text"
        name="category"
        placeholder="cateory name"
        onChange={changeCategory}
        defaultValue={category.Name}
      />
      <input type="button" name="edit" value="edit" onClick={edit} />
      <div className="list-os-listsdh">
        {props.lists.map((l) => (
          <button
            name={l.Id}
            key={l.Id}
            className="dropdown"
            onClick={goToList}
          >
            {l.Name}{" "}
          </button>
        ))}
      </div>
      <h3>הוספת רשימה</h3>
      <form className="warp">
        <br />
        <input name="Name" type="text" placeholder={"שם"} onChange={change} />
        <input
          name="Describe"
          type="text"
          placeholder={"תיאור"}
          onChange={change}
        />
        <input type="button" value={"add a new list"} onClick={addList} />
      </form>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    lists: state.lists,
    category: state.currentCategory,
    categories: state.categories,
  };
};
export default connect(mapStateToProps, {
  getTypes,
  AddList,
  updateCategoryName,
})(Category);
