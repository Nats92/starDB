import React, { Component } from 'react';
import DataService from '../../services/dataService';
import Spinner from '../spinner/spinner';
import './person-details.css';

export default class PersonDetails extends Component {
  dataService = new DataService();

  state = {
    person: {},
    loading: true,
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson = () => {
    const { personId } = this.props;
    if (!personId) {
      return;
    }
    this.setState({ loading: true })
    this.dataService.getPerson(personId).then((person) => this.setState({ person, loading: false }))
  }

  render () {
    if (!this.props.personId || !this.state.person.id) {
      return <p className='person-details-wrap'>Please, choose a character from list</p>
    }
    if (this.state.loading) {
      return <div  className='person-details-wrap spinner-wrap'><Spinner/></div>
    }
    const { id, name, gender, birthYear, eyeColor } = this.state.person;
    return (
      <div className='person-details-wrap'>
        <img className='person-img' src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="person"/>
        <div className='person-details'>
          <h4 className='person-name'>{name}</h4>
          <ul className='person-list'>
            <li>
              <span className='person-item-title'>Gender</span>
              <span>{gender}</span>
            </li>
            <li>
              <span className='person-item-title'>Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li>
              <span className='person-item-title'>Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}