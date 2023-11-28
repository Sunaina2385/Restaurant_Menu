import './App.css';
import Navbar from './components/Navbar';
import ListView from './components/ListView';
import axios from "axios";
import { useState, useEffect } from 'react';
import styled from 'styled-components';

function App() {

  const [biryani, setbiryani] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [shake, setShakes] = useState([]);

  const [rice, setrice] = useState();



  useEffect(() =>  {
    
    fetchRecipes();
    
  }, []);


  const fetchRecipes = async () => {
    const { data } = await axios.get(`http://localhost:8000/api/recipes/`);
    

        var sorted = {};
        for( var i = 0; i < data.recipes.length ; i++ ){

          if( sorted[data.recipes[i].type] === undefined ){
          sorted[data.recipes[i].type] = [];
          }
          sorted[data.recipes[i].type].push(data.recipes[i]);
        }

        console.log(sorted)
        
        setDesserts(sorted['Desserts']);
        setShakes(sorted['Shakes']);
        setbiryani(sorted['Biryani']);
      
        setrice(sorted['Rice'])

  };

  const Link = styled.a`
  background-color: white;
  color: blue;
  `;

  // const [itemIdToDelete, setItemIdToDelete] = useState("6564cf395e3ddd3fffe3ad6b"); 
  

  return (
    <div className="App">
      <Navbar />
      
      <ListView recipes={biryani} type="Biryani"/>

      <ListView recipes={rice} type="Rice"/>

     <ListView recipes={desserts} type="Desserts"/>

     <ListView recipes={shake} type="Shakes"/>

    </div>
  );
}

export default App;
