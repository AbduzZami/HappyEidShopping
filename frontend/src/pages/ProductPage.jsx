import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ProductPage() {
    const { brand } = useParams();
    const { prodType } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await axios.get(`http://localhost:8800/${prodType}/${brand}/`);
        setProducts(res.data);
        // console.log(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        console.log('finally');
      }
    }
    fetchProduct();
  }, []);


  return (
    
    <div>ProductPage</div>
    
  )
}

export default ProductPage