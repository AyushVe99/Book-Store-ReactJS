import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

const Book = ({ bookDetails }) => {
  const { addCart } = useContext(Context);
  const {
    id,
    title,
    coverImageSrc,
    rating,
    price,
    authorName,
    authorId
  } = bookDetails;

  const handleAddCart = () => {
    addCart(id);
  };

  return (
    <div className="col-lg-3 col-md-3 col-sm-6 col-12 my-2">
      <div className="border border-secondary rounded">
        <div className="cover-img">
          <img src={coverImageSrc} alt="" />
          <div className="details">
            <div className="content">
              <h5>
                <Link style={{ color: "#fff" }} to={"/book/details/" + id}>
                  {title}
                </Link>
              </h5>
              <h6>
                By{" "}
                <Link style={{ color: "#fff" }} to={"/author/" + authorId}>
                  {authorName}
                </Link>
              </h6>
              <p>
                {Array(Math.round(rating))
                  .fill()
                  .map((_, i) => (
                    <span key={i}>🌟</span>
                  ))}
              </p>
              <h4>Price: ₹{price}</h4>
            </div>
          </div>
        </div>

        <div className="bottom p-2">
          <Link className="btn btn-outline-dark me-2" to={"/book/details/" + id}>
            Details
          </Link>
          <button onClick={handleAddCart} className="btn btn-outline-dark">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
