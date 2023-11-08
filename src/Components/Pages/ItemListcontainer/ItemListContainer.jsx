
import { useState, useEffect } from "react";
import ItemCount from "../../ItemCount/ItemCount";
import ItemList from "../../ItemList/ItemList";
const ItemListContainer = () => {
    const [productList, setProductList,] = useState([]);
    
    const fetchProducts = () => {
         fetch('https://fakestoreapi.com/products')
        .then((Response) => Response.json())
        .then((data) => setProductList(data))
        .catch((error) => console.log(error))

    }

    useEffect(() => {
        fetchProducts();
    },[]);

  return (
    <div>
        <h1>Item List Container</h1>
        <ItemCount />
        <ItemList productList={productList} />
    </div>
  )
}

export default ItemListContainer;