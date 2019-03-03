import React from 'react';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

const PeoplePage = ({ onItemSelected, getData, personId, renderItem }) => (
  <div>
    <ItemList 
      onItemSelected={onItemSelected} 
      getData={getData}
      renderItem={renderItem}/>
    <PersonDetails personId={personId}/>
  </div>
)
export default PeoplePage;