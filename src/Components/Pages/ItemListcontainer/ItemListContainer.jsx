import { useState, useEffect, useContext } from "react";
import ItemList from "../../ItemList/ItemList";
import {ThemeContext} from '../../../context/ThemeContext';
import { productList } from "../../../data";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const ItemListContainer = () => {
  const colorTheme = useContext(ThemeContext);
  
  const uploadDataToFirestore = async () =>{
    const db =getFirestore();
    const ordersCollection = collection(db, 'items');

    const promises = productList.map((product) =>{
      const newProduct = {
        ...product,
        stock: 20,
        };
        return addDoc (ordersCollection, newProduct);
    });
    try{
      await Promise.all(promises);
      console.log('Todos los datos han sido subidos a Firestore');
    } catch (error){
      console.log('Error al subir los datos');
    }
  };
  return (
    <div
    style={{
      backgroundColor: colorTheme.theme === 'light' ? 'white' : 'gray',
      }}
      >
        <button onClick={uploadDataToFirestore}>Upload data</button>
        <ItemList />
    </div>
  );
};

export default ItemListContainer;