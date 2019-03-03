import React, { Component } from 'react';
import DataService from '../../services/dataService';
import Spinner from '../spinner/spinner';
import PlanetDetails from './planet-details';
import ErrorIndicator from '../error-indicator/error-indicator';
import './random-planet.css';

export default class RandomPlanet extends Component {
  state = {
    planet: {},
    loading: true,
    error: false,
  }

  componentDidMount() {
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
    })
  }

  onError = () => {
    this.setState({ 
      error: true,
      loading: false 
    })
  }

  updatePlanet = () => {
    const data = new DataService();
    const random = Math.floor(Math.random() * 19) + 1;
    data.getPlanet(random)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render () {
    const { planet, loading, error } = this.state;
    const errorIndicator = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !loading && !error ? <PlanetDetails planet={planet}/> : null;
    return (
      <div className={loading ? 'random-planet-wrap spinner-wrap' : 'random-planet-wrap'}>
        {errorIndicator}
        {spinner}
        {content}
      </div>
    )
  }
}