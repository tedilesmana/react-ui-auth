import React, { Component } from 'react';
import FormLogin from '../component/login/FormLogin.js';
import Headnav from '../component/template/navigasi/Headnav';
import Navbar from '../component/template/navigasi/Navbar';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class VLogin extends Component {

    state = {
        user: {
            email: '',
            password: '',
            redirect: false
        },
        post: []
    }

    handleTambahUser = (e) => {
        let val = e.target.value;
        let nama = e.target.name;
        let dataUser = this.state.user;

        // console.log(e.target.name);
        // console.log(val);
        dataUser[nama] = val;
        this.setState({
            user: dataUser
        }, () => {
            console.log(this.state.user);
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/login', this.state.user).then((res) => {
            console.log(res);
            // this.setState({ redirect: true })
        }, (err) => {
            console.log(err);
        })
        // this.postDataToApi();
        // axios.get('http://localhost:8000/user')
        // .then((result) => {
        //   console.log(result);
        //   this.setState({
        //       post:result.data
        //   })
        // })

        // axios.get(`http://localhost:8000/user/${this.state.user.email}`)
        // .then((result) => {
        //   // console.log(result.data.response);
        //     this.setState({
        //         post:result.data.response
        //     })
        // })

        // if (this.state.post.email==this.state.user.email) {
        //     this.setState({ redirect: true })
        // }


        // console.log('test');
        // console.log(this.state.user.email);
        // console.log(this.state.post);
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
            return <Redirect to='/dashboard'/>;
        }

        return (
            <div>
      <Headnav />
            <Navbar />
      <div className="col-md-12 pl-5 pr-5 pt-3">
        <div className="row">
          <div className="card col-md-4 offset-md-4 p-4 mt-5">
            <FormLogin 
              inputData={this.handleTambahUser.bind(this)} 
              submit={this.handleSubmit.bind(this)}  
            />
          </div>
        </div>
      </div>
      </div>
        );
    }
}

export default VLogin;