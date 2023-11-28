import React, { useState } from 'react';
import styled from "styled-components";
import  { mobile }  from "../responsive";
import { FaTrash } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";

const Container = styled.div`
    background-color: #080814e6;
    border: .1rem solid rgba(255,255,255,.3);
    width: 80%;
    padding: 10px 15px;
    margin: 7px;
    color: white;
    border-radius: 0.5rem;
    display: flex ;
    
    ${mobile({ 
    padding: "8px 10px",
    margin: "4px"
   })}
`;

const RecipeNameWrapper = styled.div`
    flex: 3;
`;

const PriceWrapper = styled.div`
    flex: 3;
`;

const DollarSpan = styled.small`
  margin-left: 3px;
  color: orange;
`; 

const FirstRecipeLetter = styled.span`
  color: orange;
  text-transform: capitalize;
  margin-right: 1.5px;
`;

const RecipeLetters = styled.span`
  color: white;
  text-transform: lowercase;
`;

const RecipeIngredientsWrapper  =  styled.div`
    align-items: center;
    font-size: x-small;
    padding-top: 3px;
`;

function colorFirstLetter (name) {

  if(name.length< 1) return;
  var indents = [];

  indents.push(<FirstRecipeLetter>{name[0]}</FirstRecipeLetter>)
  indents.push(<RecipeLetters>{name.slice(1)}</RecipeLetters>)
    
  return indents;
}

const ListItem = ({name, price,id}) => {
  // const [id,setid]=useState({_id});

  const deleteItem = () => {
    fetch(`http://localhost:8000/api/recipes/delete/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to delete item (status ${response.status})`);
      }
      // Handle success, if needed
    })
    .catch(error => {
      console.error('Error deleting item:', error);
    });
  };

  return (
    <Container key={name} id={name}>
            <RecipeNameWrapper> 
              {colorFirstLetter(name)}
            </RecipeNameWrapper>

            <PriceWrapper>{price}<DollarSpan>$</DollarSpan></PriceWrapper>

            <MdOutlineModeEdit style={{marginRight:"10px"}}/>

            <FaTrash onClick={deleteItem} />
            
    </Container>
  );
}

ListItem.defaultProps = {
  name: 'unknown Recipe',
  price: '-',
}
export default ListItem;