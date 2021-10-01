import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function ProductComponents() {
  const products = useSelector((state) => state.allProducts.product);
  console.log(products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    return (
      <div className="ui card" key={id} style={{ marginLeft: "70px" }}>
        <Link to={`/product/${id}`}>
          <div className="content">
            <div className="right floated meta">14h</div>
            <img
              className="ui image"
              src={image}
              style={{
                maxWidth: "200px",
                maxHeight: "250px",
                minHeight: "250px",
                minWidth: "200px",
              }}
            ></img>
          </div>
          <div className="image">{/* <img> */}</div>
          {/* <div className="content">
    <span className="right floated">
      <i className="heart outline like icon"></i>
      17 likes
    </span>
    <i className="comment icon"></i>
    3 comments
  </div> */}
          {/* <div className="extra content">
  //   <div className="ui large transparent left icon input">
  //     <i className="heart outline icon"></i>
  //     {/* <input type="text" placeholder="Add Comment..."> */}
          {/* </div> */}
          <div className="content floated">
            <div className="header">{title}</div>
            <div className="meta price">Rs{price}</div>
            <div className="meta">hi{category} </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
}