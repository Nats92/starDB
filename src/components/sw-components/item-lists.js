import { ItemList } from '../';
import React from 'react';
import DataService from '../../services/dataService';
import withData from '../../hoc-helpers/with-data';

const dataService = new DataService();
const {
  getAllPeople,
  getAllStarships,
  getAllPlanets
} = dataService;

const PeopleList = withData(ItemList, getAllPeople);
const PlanetList = withData(ItemList, getAllPlanets);
const StarshipList = withData(ItemList, getAllStarships);

export {
  PeopleList,
  PlanetList,
  StarshipList
}
