import React from 'react';
import { MDBIcon } from 'mdbreact';

const BtnCard = (props) => {
  return (
    <div className="btn-icon">
      	<span className="icon"><MDBIcon icon="shopping-basket" /></span>
      	<span className="icon"><MDBIcon far icon="heart" /></span>
        <span className="icon"><MDBIcon far icon="eye" /></span>
     </div>
  )
}

export default BtnCard;