import React from "react";
import { Link } from "react-router-dom";
import ProductPage from "./ProductPage";

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">What do you wanna buy?</h1>
      <Link to="/panjabi">
        <button className="btn m-2">Panjabi</button>
      </Link>

      <Link to="/pajama">
        <button className="btn m-2">Pajama</button>
      </Link>
      <Link to="/sharee">
        <button className="btn m-2">Sharee</button>
      </Link>
      <Link to="/shalwar">
        <button className="btn m-2">Shalwar</button>
      </Link>
      <Link to="/shoemen">
        <button className="btn m-2">Shoe Men</button>
      </Link>
      <Link to="/shoewomen">
        <button className="btn m-2">Shoe Women</button>
      </Link>
    </div>
  );
}

export default HomePage;
