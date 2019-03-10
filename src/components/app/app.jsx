import React, { Component } from 'react';
import { Header } from '../';
import { RandomPlanet } from '../';
import { PeoplePage } from '../';
import { PlanetsPage } from '../';
import { StarshipsPage } from '../';
import DataService from '../../services/dataService';
import { ItemDetails } from '../';
import { Record } from '../';
import {
  PeopleList,
  PlanetList,
  StarshipList
} from '../sw-components/'
import './app.css'

export default class App extends Component {
  state = {
    personId: null,
  }

  dataService = new DataService();

  onItemSelected = (id) => {
    this.setState({ personId: id });
  }

code = () => (
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
  render() {
    const { 
      getPerson, 
      getPersonImage, 
      getStarship, 
      getStarshipImage, 
      getPlanet, 
      getPlanetImage 
    } = this.dataService;
    return (
      <div className='limit'>
        <Header/>
        <PeopleList renderItem={(person) => `${person.name} (${person.gender})`}/>
        <PlanetList renderItem={(planet) => `${planet.name} (${planet.diameter})`}/>
        <StarshipList renderItem={(starship) => `${starship.name} (${starship.model})`}/>
        <ItemDetails 
          itemId={1}
          getData={getPerson}
          getImageUrl={getPersonImage}>
            <Record label='Gender' field='gender'/>
            <Record label='Birth Year' field='birthYear'/>
            <Record label='Eye Color' field='eyeColor'/>
        </ItemDetails>
        <ItemDetails
          itemId={5}
          getData={getStarship}
          getImageUrl={getStarshipImage}>
            <Record label='Model' field='model'/>
            <Record label='Length' field='length'/>
            <Record label='Cost' field='costInCredits'/>
            <Record label='Passengers' field='passengers'/>
        </ItemDetails>
      </div>
    )
  }
}