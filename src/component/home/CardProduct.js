import React from 'react';
import '../../style/CardProduct.css';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText } from 'mdbreact';

const CardProduct = (props) => {
  return (
      <MDBCard>
        <MDBCardImage id="img-card" className="img-fluid" src={props.img} waves />
        <MDBCardBody>
          	<MDBCardText className="">
            <b>{props.title}</b>
            <br/>
            Harga: Rp.{props.harga}-
          	</MDBCardText>
        </MDBCardBody>
      </MDBCard>
  )
}

export default CardProduct;