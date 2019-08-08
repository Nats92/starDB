import React, { Component } from 'react';
import { Header } from '../';
import { RandomPlanet } from '../';
import { PeoplePage } from '../';
import { PlanetsPage } from '../';
import { StarshipsPage } from '../';
import DataService from '../../services/dataService';
import './app.css'

export default class App extends Component {
  state = {
    personId: null,
    starshipId: null,
    planetId: null,
  };

  dataService = new DataService();

  onItemSelected = (id) => {
    this.setState({ personId: id });
  };

  onStarshipSelected = (id) => {
    this.setState({ starshipId: id });
  };

  onPlanetSelected = (id) => {
    this.setState({ planetId: id });
  };
  render() {
    const {
      getPersonImage,
      getStarshipImage,
      getPlanetImage
    } = this.dataService;
    return (
      <div className='limit'>
        <Header/>
        <RandomPlanet/>
        <PeoplePage
          getData={this.dataService.getAllPeople}
          onItemSelected={this.onItemSelected}
          getImageUrl={getPersonImage}
          personId={this.state.personId}
          renderItem={(person) => `${person.name} (${person.gender})`}
        />
        <PlanetsPage
          getData={this.dataService.getAllPlanets}
          onItemSelected={this.onPlanetSelected}
          personId={this.state.planetId}
          getImageUrl={getPlanetImage}
          renderItem={(planet) => `${planet.name} (${planet.diameter})`}
        />
        <StarshipsPage
          getData={this.dataService.getAllStarships}
          onItemSelected={this.onStarshipSelected}
          personId={this.state.starshipId}
          getImageUrl={getStarshipImage}
          renderItem={(starship) => `${starship.name} (${starship.model})`}
        />
      </div>
    )
  }
}
