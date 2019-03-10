import React, { Component } from 'react';
import { Wrap } from '../components/';
import { Spinner } from '../components/';

const withData = (View, getData) => {
  return class extends Component {
    state = {
      item: {},
      image: null,
      loading: true,
    }

    componentDidMount() {
      this.updateItem();
    }

    componentDidUpdate(prevProps) {
      if (this.props.itemId !== prevProps.itemId) {
        this.updateItem();
      }
    }

    updateItem = () => {
      const { itemId, getImageUrl } = this.props;
      if (!itemId) {
        this.setState({ loading: false })
        return;
      }
      this.setState({ loading: true })
      getData(itemId).then((item) => {
        this.setState({ 
          item, 
          image: getImageUrl(item.id), 
          loading: false 
        })
      })
    }
    render() {
      if (this.state.loading) {
        return <Wrap spinner={this.state.loading} additionalClassName='item-details-wrap'><Spinner/></Wrap>
      }
      return <View {...this.props} item={this.state.item} getData={getData}/>
    }
  }
}
export default withData;