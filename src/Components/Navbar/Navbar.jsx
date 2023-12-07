import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './style.css';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';



const Navbar = () =>{
    const {setTheme} = useContext(ThemeContext);
    const {productQuantity} = useContext(CartContext);

    return(
                <div className='navbar-container'>
                    <Link to = {'/'}>
                    <h1 className='logo'>Logo</h1>   
                    </Link>
            <nav>
                <ul className='list-container'>
                    <li>
                        <NavLink activeclassname="active" to={'/category/electronics'} className='category-button'>Electronica</NavLink>
                    </li>
                    <li>
                        <NavLink activeclassname="active" to={'/category/jewelery'} className='category-button'>Joyeria</NavLink>
                    </li>
                    <li>
                        <NavLink activeclassname="active" to={"/category/men's-clothing"} className='category-button'>Ropa de Hombre</NavLink>
                    </li>
                    <li>
                        <NavLink activeclassname="active" to={"/category/women's-clothing"} className='category-button'>Ropa de Mujer</NavLink>
                    </li>
                    
                </ul>
             
                
            </nav>
            <Link to={'/cart'}>
            <h3>Productos en el carrito: {productQuantity}</h3>
            </Link>
        </div>

    );
};

export default Navbar;