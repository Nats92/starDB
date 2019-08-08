export default class DataService {
  _baseUrl = 'https://swapi.co/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';
  async getData(url) {
    const res = await fetch(`${this._baseUrl}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return res.json();
  }
  getAllPeople = async () => {
    const res = await this.getData('/people/');
    return res.results.map(this._transformPersonData);
  };
  getPerson = async (id) => {
    const person = await this.getData(`/people/${id}`);
    return this._transformPersonData(person);
  };
  getAllPlanets = async () => {
    const res = await this.getData('/planets/');
    return res.results.map(this._transformPlanetData);
  };
  getPlanet = async (id) => {
    const planet = await this.getData(`/planets/${id}`);
    return this._transformPlanetData(planet);
  };
  getAllStarships = async () => {
    const res = await this.getData('/starships/');
    return res.results.map(this._transformStarshipData);
  };
  getStarship = async (id) => {
    const starship = await this.getData(`/starships/${id}`);
    return this._transformStarshipData(starship);
  };
  getPersonImage = (id) => {
    return `${this._imageBase}/characters/${id}.jpg`
  };
  getStarshipImage = (id) => {
    return `${this._imageBase}/starships/${id}.jpg`
  };
  getPlanetImage = (id) => {
    return `${this._imageBase}/planets/${id}.jpg`
  };

  _extractID = (item) => {
    const regEX = /\/([0-9]*)\/$/;
    return item.url.match(regEX)[1];
  };

  _transformPlanetData = (planet) => ({
    id: this._extractID(planet),
    population: planet.population,
    rotationPeriod: planet.rotation_period,
    diameter: planet.diameter,
    name: planet.name,
  });

  _transformPersonData = (person) => ({
    id: this._extractID(person),
    name: person.name,
    eyeColor: person.eye_color,
    gender: person.gender,
    birthYear: person.birth_year,
  });

   _transformStarshipData = (starship) => ({
    id: this._extractID(starship),
    name: starship.name,
    model: starship.model,
    manufacturer: starship.manufacturer,
    costInCredits: starship.cost_in_credits,
    length: starship.length,
    crew: starship.crew,
    passengers: starship.passengers,
    cargoCapacity: starship.cargo_capacity,
  })
}
