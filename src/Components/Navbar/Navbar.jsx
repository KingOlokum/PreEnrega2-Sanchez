import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


const Navbar = () =>{
    return(
                <div className='navbar-container'>
            <h1 className='logo'>Logo</h1>
            <nav>
                <ul className='list-container'>
                    <li>
                        <Link to={'/category/electronics'} className='category-button'>Electronica</Link>
                    </li>
                    <li>
                        <Link to={'/category/jewelery'} className='category-button'>Joyeria</Link>
                    </li>
                    <li>
                        <Link to={"/category/men's-clothing"} className='category-button'>Ropa de Hombre</Link>
                    </li>
                    <li>
                        <Link to={"/category/women's-clothing"} className='category-button'>Ropa de Mujer</Link>
                    </li>
                    
                </ul>
                
            </nav>
            
        </div>

    );
};

export default Navbar;