import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const {id} = useParams();

  const fethcProduct = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then((Response) => Response.json())
        .then((data) => setProduct(data))
        .catch((error) => console.log(error))
  }

  useEffect(() =>{
    fethcProduct();
  }, [])
  return (
    <div>
        <ItemDetail itemSelected={product}/>
    </div>
  )
}

export default ItemDetailContainer;