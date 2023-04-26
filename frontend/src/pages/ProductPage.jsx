import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductPage() {
  const { brand } = useParams();
  const { prodType } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await axios.get(
          `http://localhost:8800/${prodType}/${brand}/`
        );
        setProducts(res.data);
        // console.log(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("finally");
      }
    }
    fetchProduct();
  }, []);

  return (
    <>
      <div>ProductPage</div>
      <div className="flex flex-wrap">
        {products.map((product, key) => (
          <div className="card w-96 bg-base-100 shadow-xl m-5 w-72" key={key}>
            <Link to={product.href} target="_blank">
              <figure>
                <img src={product.src} alt="Img" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {product.name}
                  <div className="badge badge-secondary">Panjabi</div>
                </h2>
                <p>{product.price}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Arong</div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductPage;
