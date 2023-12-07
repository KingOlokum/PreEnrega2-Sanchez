import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"
import Item from "../../Item/Item";
import { Form } from "react-bootstrap";
import { collection, getFirestore, addDoc,} from "firebase/firestore";
import './style.css';

const Cart = () => {
  const [formValue, setFormValue] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const {products, clear, removeItem} = useContext(CartContext);
  const handleInput = (event) => {

    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = 
  formValue.name === '' || formValue.phone === '' || formValue.email === '';

  const createOrder = (event) => {
    event.preventDefault();
    const db = getFirestore();
    const querySnapshot = collection(db, 'orders');
    const newOrder = {
      buyer: formValue,
      items: products.map((product) =>{
        return{
        title: product.title,
        price: product.price,
        id: product.id,
        quantity: product.quantity,
        }
        
      }),
      date: new Date(),
      total: products.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
       ),
    };
    addDoc(querySnapshot,newOrder)
    .then((res) => alert('Orden creada con exito'))
    .catch((err) => alert('Error al crear la orden'));

  };
  return (
    <div>
      <h1>Tu carrito de compras</h1>
      <button onClick={clear}>Vaciar carrito</button>
      <form className="form-container">
        <Form.Group className ="mb-3 formulario">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre"
          value={formValue.name} onChange={handleInput} name="name"/>
        </Form.Group>
        <Form.Group className="mb-3 formulario">
        <Form.Label>Telefono</Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu telefono"
          value={formValue.phone} onChange={handleInput} name="phone"/>
        </Form.Group>
        <Form.Group className="mb-3 formulario">
        <Form.Label>Direccion de E-mail</Form.Label>
        <Form.Control type="text" placeholder="Ingresa tu E-mail"
          value={formValue.email} onChange={handleInput} name="email"/>
        </Form.Group>
        <button onClick={createOrder} className="confirmar" type="submit" disabled={validateForm}>Confirmar compra</button>
      </form>
      
    { products.length > 0 ? (
    <div className="item-list-container">
      {products.map((item) => {
        return(
          <div key={item.id}>
          <Item
          title={item.title}
          description={item.description}
          price={item.price}
          image={item.image}
          />
          <h5>Cantidad: {item.quantity}</h5>
          <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </div>
        );
      })}

    </div>
    ) : (
      <h2>No hay productos en el carrito</h2>
    )}

    </div>
  );
};

export default Cart