import React, { Component } from 'react';
import { Spinner } from '../';
import { Wrap } from '../';
import './item-list.css';

export default class ItemList extends Component {
  state = {
    itemList: null,
  }

  componentDidMount() {
    this.props.getData()
      .then((itemList) => this.setState({ itemList }))
  }

  renderItems = itemsList => {
    if (!itemsList) { return }
    return itemsList.map((item) => {
      return (
        <li 
          key={item.id} 
          onClick={() => this.props.onItemSelected(item.id)}
          className='list-item'
        >
          {this.props.renderItem(item)}
        </li>
      )
    })
  }

  render() {
    const { itemList } = this.state;
    const spinner = itemList ? null : <Spinner/>;
    return (
      <Wrap spinner={!itemList} additionalClassName='item-list-wrap'>
        {spinner}
        <ul className='item-list'>
          {this.renderItems(itemList)} 
        </ul>
      </Wrap>
    )
  }
}