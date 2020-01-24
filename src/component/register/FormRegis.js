import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const FormRegis = (props) => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <form onSubmit={props.submit}>

            <p className="h4 text-center mb-4">Sign up</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Your username
            </label>
            <input
              type="text"
              name="username"
              id="defaultFormRegisterNameEx"
              className="form-control"
              onChange={props.inputData}
            />
            <br />

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

            <label
              htmlFor="defaultFormRegisterConfirmEx"
              className="grey-text"
            >
              Alamat
            </label>
            <input
              type="text"
              name="alamat"
              id="defaultFormRegisterConfirmEx"
              className="form-control"
              onChange={props.inputData}
            />
            <br />

            <label
              htmlFor="defaultFormRegisterConfirmEx"
              className="grey-text"
            >
              Nomor Telepon
            </label>
            <input
              type="text"
              name="noTelp"
              id="defaultFormRegisterConfirmEx"
              className="form-control"
              onChange={props.inputData}
            />
            <br />

            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormRegis;