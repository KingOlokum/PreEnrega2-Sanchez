
import './style.css';
const Item = ({title, descripcion, price,image}) => {
  return (
    <div className="card-container">
    <h6 className="card-title">{title}</h6>
    <img src={image} alt={title} width={70} />
    <div className="card-descripcion">
    <p>{descripcion}</p></div>
    <p>${price}</p>
    </div>
  )
}

export default Item;