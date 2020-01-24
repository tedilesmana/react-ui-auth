import React, { Component } from 'react';
import FormRegis from '../component/register/FormRegis';
import Headnav from '../component/template/navigasi/Headnav';
import Navbar from '../component/template/navigasi/Navbar';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class VRegister extends Component {

    state = {
        user:{
          username : '',
          email : '',
          password : '',
          alamat : '',
          noTelp : '',
          redirect: false
        }
      }

      handleTambahUser = (e) => {
        let val = e.target.value;
        let nama = e.target.name;
        let dataUser = this.state.user;

        // console.log(e.target.name);
        // console.log(val);
        dataUser[nama] = val;
        this.setState({
          user : dataUser
        }, () => {
          console.log(this.state.user);
        })
      }

      handleSubmit = (e) => {
        e.preventDefault();
        this.postDataToApi();
        console.log(this.state.user);
      }

      postDataToApi = () => {
        axios.post('http://localhost:8000/user', this.state.user).then((res) => {
          console.log(res);
          this.setState({ redirect: true })
        }, (err) => {
          console.log(err);
        })
      }

  render() {
    const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/'/>;
     }
    return (
    	<div>
      <Headnav />
            <Navbar />
      <div className="col-md-4 offset-md-4 mt-5 card pt-5 pb-5">
      	<FormRegis 
          inputData={this.handleTambahUser.bind(this)} 
          submit={this.handleSubmit.bind(this)} 
        />
      </div>
      </div>
    );
  }
}

export default VRegister;