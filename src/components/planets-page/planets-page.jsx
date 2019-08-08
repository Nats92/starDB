import React from 'react';
import { ItemList } from '../';
import { ItemDetails } from '../';

const PlanetsPage = ({ onItemSelected, getData, personId, renderItem, getImageUrl }) => (
  <div>
    <ItemList
      onItemSelected={onItemSelected}
      getData={getData}
      renderItem={renderItem}
    />
    <ItemDetails itemId={personId} getImageUrl={getImageUrl} />
  </div>
);
export default PlanetsPage;
