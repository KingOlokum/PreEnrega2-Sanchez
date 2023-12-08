import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/Pages/ItemListcontainer/ItemListContainer';
import ItemDetailContainer from './Components/Pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Pages/Cart/Cart';
import CartProvider from './context/CartProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from './context/ThemeProvider';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFL1PUXbwRyR0aSskXoOlyM7ACjau2EvM",
  authDomain: "coderhouse-ecommerce-e1c78.firebaseapp.com",
  projectId: "coderhouse-ecommerce-e1c78",
  storageBucket: "coderhouse-ecommerce-e1c78.appspot.com",
  messagingSenderId: "698012367490",
  appId: "1:698012367490:web:e55a7c9bcdc76832d0129b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



function App() {
  
  return (
    <BrowserRouter>
    <ThemeProvider>
    <CartProvider>
    <Navbar />
    <Routes>

      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      <Route path='/category/:id/item/:id' element={<ItemDetailContainer/>}/>
      <Route path="/cart" element={<Cart />} />

      
    </Routes>
    </CartProvider>
    </ThemeProvider>
        
    </BrowserRouter>
   
  );
}

export default App;
