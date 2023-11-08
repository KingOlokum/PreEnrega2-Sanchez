import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/Pages/ItemListcontainer/ItemListContainer';
import ItemDetailContainer from './Components/Pages/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>

      <Route path="/" element={<ItemListContainer />} />
      <Route path="/category/:id" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />

    </Routes>
        
    </BrowserRouter>
   
  );
}

export default App;
