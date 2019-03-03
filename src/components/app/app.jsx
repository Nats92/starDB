import React, { Component } from 'react';
import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet';
import PeoplePage from '../people-page/people-page';
import PlanetsPage from '../planets-page/planets-page';
import StarshipsPage from '../starships-page/starships-page';
import DataService from '../../services/dataService';
import './app.css'

export default class App extends Component {
  state = {
    personId: null,
  }

  dataService = new DataService();

  onItemSelected = (id) => {
    this.setState({ personId: id });
  }

  render() {
    return (
      <div className='limit'>
        <Header/>
        <RandomPlanet/>
        <PeoplePage 
          getData={this.dataService.getAllPeople} 
          onItemSelected={this.onItemSelected} 
          personId={this.state.personId}
          renderItem={(person) => `${person.name} (${person.gender})`}
        />
        <PlanetsPage 
          getData={this.dataService.getAllPlanets} 
          onItemSelected={this.onItemSelected} 
          personId={this.state.personId}
          renderItem={(planet) => `${planet.name} (${planet.diameter})`}
        />
        <StarshipsPage 
          getData={this.dataService.getAllStarships} 
          onItemSelected={this.onItemSelected} 
          personId={this.state.personId}
          renderItem={(starship) => `${starship.name} (${starship.model})`}
        />
      </div>
    )
  }
}