import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import  ListItem   from './ListItem';

const Container = styled.div`
  background-color: #010103;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 5px 7px;
  min-height: 30vh;
`;

const ListTitle = styled.h3`
  color: white;
  text-shadow: 0.8px 0.8px  orange;
  text-transform: capitalize;
`;


const ListView = ({recipes, type}) => {
  
  return (
    <Container id={type} key={type} className={type}>
      <ListTitle>{type}</ListTitle>
    { recipes && recipes.map((recipe)=>  <ListItem  price={recipe.price} name={recipe.name} key={recipe.name} id={recipe._id}/>) }

    </Container>
  );
}

ListView.defaultProps = {
  recipes: [],
  type: "category type"
}
export default ListView;