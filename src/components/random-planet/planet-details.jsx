import React from 'react';

const PlanetDetails = ({planet}) => {
  const { name, id, rotationPeriod, population, diameter } = planet;
  return (
    <React.Fragment>
      <img className='planet-img' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="random planet"/>
      <div className='planet-details'>
        <h4 className='planet-name'>{name}</h4>
        <ul className='details-list'>
          <li>
            <span className='details-item-title'>Population</span>
            <span>{population}</span>
          </li>
          <li>
            <span className='details-item-title'>Rotation period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li>
            <span className='details-item-title'>Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}
export default PlanetDetails;