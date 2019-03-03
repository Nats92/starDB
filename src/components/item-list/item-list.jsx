import React, { Component } from 'react';
import Spinner from '../spinner/spinner';
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
        <li key={item.id} onClick={() => this.props.onItemSelected(item.id)}>
          {this.props.renderItem(item)}
        </li>
      )
    })
  }

  render() {
    const { itemList } = this.state;
    if (!itemList) {
      return <div className='item-list spinner-wrap'><Spinner/></div>
    }
    return (
      <ul className='item-list'>
        {this.renderItems(itemList)} 
      </ul>
    )
  }
}