import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductComponent() {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, name, img_url, description, final_price } = product;
    return (
      <div className="five wide column">
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={img_url} alt={name} />
              </div>
              <div className="content">
                <div className="header">{name}</div>
                <div className="meta price">${final_price}</div>
                <div className="meta">{description}</div>
              </div>
            </div>
            <div className="ui vertical animated button" tabIndex="0">
              <div className="hidden content">
                <i className="shop icon"></i>
              </div>
              <div className="visible content">Add to cart</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  //const {id, title}=products[0];
  return <>{renderList}</>;
}

export default ProductComponent;
