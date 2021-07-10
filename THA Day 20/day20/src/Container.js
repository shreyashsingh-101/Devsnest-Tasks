import { useState } from "react";

const Item = (props) => {
  const { name, calorie, items, id, setItems } = props;
  return (
    <div className="item">
      <div className="item_name">
        <div>{name}</div>

        <div>
          <button
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
        You have consumed {calorie} Calories today.
      </div>
    </div>
  );
};

const Container = () => {
  const [items, setItems] = useState([
    {
      name: "Pizza",
      calorie: "56",
    },
    {
      name: "Burger",
      calorie: "70",
    },
    {
      name: "Brownie",
      calorie: "180",
    },
  ]);
  let items_arr = [];
  for (let i = 0; i < items.length; i++) {
    items_arr.push(
      <Item
        key={i}
        id={i}
        name={items[i].name}
        calorie={items[i].calorie}
        setItems={setItems}
        items={items}
      />
    );
  }
  return (
    <div className="container">
      {items_arr.length > 0 ? (
        items_arr
      ) : (
        <div className="nodata">No Data Found</div>
      )}
    </div>
  );
};

export default Container;
