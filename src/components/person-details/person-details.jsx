import React, { Component } from 'react';
import DataService from '../../services/dataService';
import Spinner from '../spinner/spinner';
import Wrap from '../wrap/wrap';
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
      this.setState({ loading: false })
      return;
    }
    this.setState({ loading: true })
    this.dataService.getPerson(personId).then((person) => this.setState({ person, loading: false }))
  }

  renderNotChoosed = () => (
    <p>Please, choose a character from list</p>
  )

  renderContent = ({ id, name, gender, birthYear, eyeColor }) => (
    <React.Fragment>
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
    </React.Fragment>
  )

  render () {
    const spinner = this.state.loading ? <Spinner/> : null;
    const personNotChoosed = !this.props.personId && !spinner ? this.renderNotChoosed() : null;
    const content = personNotChoosed || spinner ? null : this.renderContent(this.state.person);
    return (
      <Wrap spinner={this.state.loading} additionalClassName='person-details-wrap'>
        {personNotChoosed}
        {spinner}
        {content}
      </Wrap>
    )
  }
}