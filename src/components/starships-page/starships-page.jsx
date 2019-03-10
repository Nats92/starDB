import React from 'react';
import { ItemList } from '../';
import { ItemDetails } from '../';

const StarshipsPage = ({ onItemSelected, getData, personId, renderItem }) => (
  <div>
    <ItemList
      onItemSelected={onItemSelected}
      getData={getData}
      renderItem={renderItem}
    />
    <ItemDetails itemId={personId}/>
  </div>
)
export default StarshipsPage;