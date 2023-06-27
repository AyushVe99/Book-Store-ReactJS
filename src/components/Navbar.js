import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { carts } = useContext(Context);
  return (
    <div className="bg-red shadow-sm  px-md-4 mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center">
        <Link
          className="heading my-0 mr-md-auto font-weight-normal "
          style={{
            textDecoration: "none",
            color: "#282C34",
            fontWeight: 500,
            fontSize: "2rem",
            fontFamily: "Times New Roman, serif"
          }}
          to="/"
        >
          <img
                    className style={{ width: "200px", height: "130px" }}
                    src='https://i.pinimg.com/originals/95/f8/58/95f8588d6469a16271ea2d2fad419d00.png' 
                    alt=''
                />
        </Link>

        <nav className="my-2 my-md-0 mr-md-3">
          <Link className="btn btn-outline-danger mr-3" to="/login">
            Login
          </Link>
          <Link className="btn btn-outline-danger" to="/about">
            About Us
          </Link>
        </nav>
        <Link className="btn btn-outline-danger" to="/book-cart">
          Cart ( 
          <span style={{ color: "#afafaf" }}>
            {carts.length !== 0 ? carts.length : 0}
          </span>
          )
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
