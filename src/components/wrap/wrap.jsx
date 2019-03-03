import React from 'react';
import './wrap.css';
import classNames from 'classnames';

const Wrap = ({ spinner, children, additionalClassName }) => {
  const wrapClasses = classNames(spinner ? 'standart-wrap spinner-wrap' : 'standart-wrap', additionalClassName)
  return (
    <div className={wrapClasses}>
      {children}
    </div>
  )
}
export default Wrap;