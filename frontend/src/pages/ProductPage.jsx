import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductPage() {
  const { prodType } = useParams();
  const [products, setProducts] = useState([]);

  // async function fetchProduct() {
  //   try {
  //     const res = await axios.get(`http://localhost:8800/${prodType}/arong`);
  //     setProducts(res.data);
  //     // console.log(res.data);
  //     console.log(res.data);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     console.log("finally");
  //   }
  // }

  useEffect(() => {
    async function loadPanjabi() {
      try {
        let datalist = [];
        await axios
          .get(`http://localhost:8800/${prodType}/arong`)
          .then(async (res) => {
            datalist.push(...(res.data || []));
            await axios
              .get(`http://localhost:8800/${prodType}/yellow`)
              .then(async (res) => {
                datalist.push(...(res.data || []));
                setProducts(datalist);
                console.log(products);
              });
          });
        // console.log(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("finally");
      }
    }

    async function loadPajama() {
      try {
        let datalist = [];
        await axios
          .get(`http://localhost:8800/${prodType}/arong`)
          .then(async (res) => {
            datalist.push(...(res.data || []));
            await axios
              .get(`http://localhost:8800/${prodType}/yellow`)
              .then(async (res) => {
                datalist.push(...(res.data || []));
                setProducts(datalist);
                console.log(products);
              });
          });
        // console.log(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("finally");
      }
    }

    async function loadSharee() {
      try {
        let datalist = [];
        await axios
          .get(`http://localhost:8800/${prodType}/arong`)
          .then(async (res) => {
            datalist.push(...(res.data || []));
            await axios
              .get(`http://localhost:8800/${prodType}/yellow`)
              .then(async (res) => {
                datalist.push(...(res.data || []));
                setProducts(datalist);
                console.log(products);
              });
          });
        // console.log(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("finally");
      }
    }

    async function loadShalwar() {
      try {
        let datalist = [];
        await axios
          .get(`http://localhost:8800/${prodType}/arong`)
          .then(async (res) => {
            datalist.push(...(res.data || []));
            await axios
              .get(`http://localhost:8800/${prodType}/yellow`)
              .then(async (res) => {
                datalist.push(...(res.data || []));
                setProducts(datalist);
                console.log(products);
              });
          });
        // console.log(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("finally");
      }
    }

    async function loadMenShoe() {
      try {
        let datalist = [];
        await axios
          .get(`http://localhost:8800/${prodType}/bata`)
          .then(async (res) => {
            datalist.push(...(res.data || []));
            await axios
              .get(`http://localhost:8800/${prodType}/apex`)
              .then(async (res) => {
                datalist.push(...(res.data || []));
                setProducts(datalist);
                console.log(products);
              });
          });
        // console.log(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("finally");
      }
    }

    async function loadWomenShoe() {
      try {
        let datalist = [];
        await axios
          .get(`http://localhost:8800/${prodType}/bata`)
          .then(async (res) => {
            datalist.push(...(res.data || []));
            await axios
              .get(`http://localhost:8800/${prodType}/apex`)
              .then(async (res) => {
                datalist.push(...(res.data || []));
                setProducts(datalist);
                console.log(products);
              });
          });
        // console.log(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        console.log("finally");
      }
    }

    if (prodType === "panjabi") {
      loadPanjabi();
    } else if (prodType === "pajama") {
      loadPajama();
    } else if (prodType === "sharee") {
      loadSharee();
    } else if (prodType === "shalwar") {
      loadShalwar();
    } else if (prodType === "shoemen") {
      loadMenShoe();
    } else if (prodType === "shoewomen") {
      loadWomenShoe();
    }
  }, []);

  return (
    <>
      <div>{prodType}</div>
      <div className="flex flex-wrap">
        {products.map((product, key) => (
          <div className="card w-96 bg-base-100 shadow-xl m-5 w-64" key={key}>
            <Link to={product.href} target="_blank">
              <figure>
                <img src={product.src} alt="Img" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {product.name}
                  <div className="badge badge-secondary">{prodType}</div>
                </h2>
                <p>{product.price}</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">{product.brand}</div>
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
