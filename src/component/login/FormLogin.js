import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

const FormLogin = (props) => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <form onSubmit={props.submit}>

            <p className="h4 text-center mb-4">Sign In</p>
            

            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
              onChange={props.inputData}
            />
            <br />

            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
              onChange={props.inputData}
            />
            <br />

            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                Sign In
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormLogin;