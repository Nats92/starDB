import React from 'react';
import { Wrap } from '../';
import './item-details.css';

const ItemDetails = ({
  item = {},
  getImageUrl,
  children,
  item: { id, name } = {},
  itemId,
  loading
}) => {
  const renderNotChoosed = () => <p>Please, choose a character from list</p>
  const renderContent = () => {
    return (
      <React.Fragment>
        <img className='item-img' src={getImageUrl(id)} alt="item"/>
        <div className='item-details'>
          <h4 className='item-name'>{name}</h4>
          <ul className='details-list'>
            {React.Children.map(children, (child) => {
              return React.cloneElement(child, { item })
            })}
          </ul>
        </div>
      </React.Fragment>
    )
  }
  const itemNotChoosed = !itemId ? renderNotChoosed() : null;
  const content = itemNotChoosed ? null : renderContent();
  return (
    <Wrap additionalClassName='item-details-wrap'>
      {itemNotChoosed}
      {content}
    </Wrap>
  )
}
export default ItemDetails;