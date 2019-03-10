import React from 'react';
import { ItemList } from '../';
import { ItemDetails } from '../';

const PeoplePage = ({ onItemSelected, getData, personId, renderItem }) => (
  <div>
    <ItemList 
      onItemSelected={onItemSelected} 
      getData={getData}
      renderItem={renderItem}/>
    <ItemDetails itemId={personId}/>
  </div>
)
export default PeoplePage;