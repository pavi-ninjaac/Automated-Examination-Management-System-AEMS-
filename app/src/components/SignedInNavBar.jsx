import React from "react";
import { Link } from "react-router-dom";

const aStyle = {
  textDecoration: "none",
  color: "black"
};
const liStyle = {
  listStyle: "none",
  display: "inline-block",
  marginLeft: "1rem"
};

export default function SignedInNavBar() {
  return (
    <div className="container">
      <nav>
        <ul style={{ display: "flex", justifyContent: "flex-end", width: '90%', margin: '2rem auto' }}>
          <li style={liStyle}>
            <Link to="/admin" style={aStyle}>
              Admin
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/materials" style={aStyle}>
              Materials
            </Link>
          </li>
          <li style={liStyle}>
            <Link to="/auth/signin" style={aStyle}>
              SignIn
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
