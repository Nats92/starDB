export default class DataServise {
  _baseUrl = 'https://swapi.co/api';
  async getData(url) {
    const res = await fetch(`${this._baseUrl}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    const body = res.json();
    return body;
  }
  getAllPeople = async () => {
    const res = await this.getData('/people/');
    return res.results.map(this._transformPersonData);
  }
  getPerson = async (id) => {
    const person = await this.getData(`/people/${id}`);
    return this._transformPersonData(person);
  }
  getAllPlanets = async () => {
    const res = await this.getData('/planets/');
    return res.results.map(this._transformPlanetData);
  }
  getPlanet = async (id) => {
    const planet = await this.getData(`/planets/${id}`);
    return this._transformPlanetData(planet);
  }
  getAllStarships = async () => {
    const res = await this.getData('/starships/');
    return res.results.map(this._transformStarshipData);
  }
  getStarship = async (id) => {
    const starship = await this.getData(`/starships/${id}`);
    return this._transformStarshipData(starship);
  }

  _extractID = (item) => {
    const regEX = /\/([0-9]*)\/$/;
    return item.url.match(regEX)[1];
  }

  _transformPlanetData = (planet) => ({ 
    id: this._extractID(planet),
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter,
    name: planet.name,
  })

  _transformPersonData = (person) => ({ 
    id: this._extractID(person),
    name: person.name,
    eyeColor: person.eye_color,
    gender: person.gender,
    birthYear: person.birth_year,
  })

   _transformStarshipData = (starship) => ({ 
    id: this._extractID(starship),
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    costInCredits: starship.costInCredits,
    length: starship.length,
    crew: starship.crew,
    passengers: starship.passengers,
    cargoCapacity: starship.cargoCapacity,
  })
}