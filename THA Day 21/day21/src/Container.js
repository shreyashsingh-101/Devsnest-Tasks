import { useState } from "react";

const Item = (props) => {
  const { items, id, setItems } = props;

  const [food, setFood] = useState("");
  const [f_calorie, setF_calorie] = useState("");
  return (
    <div className="item">
      {/* Input Form Start */}

      <form className="edit_form">
        <div className="inputs">
          <input
            className="foo_name"
            type="text"
            name="foo_name"
            placeholder="Item name"
            onChange={(e) => {
              setFood(e.target.value);
            }}
          />
          <input
            className="calorie"
            type="number"
            name="calorie"
            placeholder="Calorie amount"
            onChange={(e) => {
              setF_calorie(e.target.value);
            }}
          />
        </div>
        <div className="sub_btn">
          <button
            onClick={(e) => {
              e.preventDefault();
              let curr_item =
                e.target.parentElement.parentElement.parentElement;
              curr_item.children[0].style.display = "none";
              curr_item.children[1].style.display = "flex";
              curr_item.children[2].style.display = "flex";

              if (food.length) {
                let newItems = items;
                newItems[id].name = food;
                setItems(newItems);
                setFood("");
              }
              if (f_calorie.length) {
                let newItems = items;
                newItems[id].calorie = f_calorie;
                setItems(newItems);
                setF_calorie("");
              }
            }}
            className="edit_done"
          >
            Done
          </button>
        </div>
      </form>
      {/* Input Form End */}
      <div className="item_name">
        <div>{items[id].name}</div>

        <div className="item_btns">
          <button
            onClick={(e) => {
              let curr_item =
                e.target.parentElement.parentElement.parentElement;
              curr_item.children[0].style.display = "flex";
              curr_item.children[1].style.display = "none";
              curr_item.children[2].style.display = "none";

              curr_item.children[0].children[0].children[0].value =
                items[id].name;
              curr_item.children[0].children[0].children[1].value =
                items[id].calorie;
            }}
            className="edit"
          >
            Edit
          </button>
          <button
            className="del"
            onClick={() => {
              const newItems = items.filter((item, index) => index !== id);
              setItems(newItems);
            }}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="calorie_count">
        You have consumed {items[id].calorie} Calories today.
      </div>
    </div>
  );
};

const Container = (props) => {
  const { items, setItems } = props;

  let items_arr = [];
  for (let i = 0; i < items.length; i++) {
    items_arr.push(<Item key={i} id={i} setItems={setItems} items={items} />);
  }
  return (
    <div className="container">
      {items_arr.length > 0 ? (
        items_arr
      ) : (
        <div className="nodata">No data found</div>
      )}
    </div>
  );
};

export default Container;
