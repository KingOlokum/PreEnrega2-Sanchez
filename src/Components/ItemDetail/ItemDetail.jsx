import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({itemSelected}) => {
  const [count, setCount] = useState(1);
  const stock = 5;
  const navigate = useNavigate();
  const {addItem} = useContext(CartContext);
  const addToCart = () => {
    addItem(itemSelected, count);
  }
  const handLeNavigation = () => {
    navigate('/cart');
  }
  return (
    <div>
        <h6 className="card-title">{itemSelected?.title}</h6>
        <img src={itemSelected?.image} alt={itemSelected.title} width={70} />
        <div className="card-descripcion">
            <p>{itemSelected?.descripcion}</p>
        </div>
        <span>Stock:{stock}</span>
        <p>{itemSelected?.price}</p>

        <div>
          <button onClick={handLeNavigation}>Terminar mi compra</button>
          <button onClick={addToCart}>Agregar al carrito</button>
          <ItemCount count={count} setCount={setCount} stock={stock} />
        </div>
    </div>
  )
}

export default ItemDetail;