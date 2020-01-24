import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import FormUploadProduk from '../component/upload_produk/FormUploadProduk';
import Headnav from '../component/template/navigasi/Headnav';
import Navbar from '../component/template/navigasi/Navbar';

class VUploadProduk extends Component {
	state = {
		produk:{
			id : 1,
			nama_produk : '',
			harga_produk : '',
			image_produk : '',
			redirect: false
		}
	}

	handleTambahProduk = (e) => {
		let val = e.target.value;
		let name_val = e.target.name;
		let dataProduk = this.state.produk;
		let timeNow = new Date().getTime();

		dataProduk[name_val] = val;
		dataProduk['id'] = timeNow;
		this.setState({
			produk : dataProduk
		}, () => {
			console.log(dataProduk);
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.postDataToApi();
		console.log(this.state.produk);
	}

	postDataToApi = () => {
		axios.post('http://localhost:3004/posts', this.state.produk).then((res) => {
			console.log(res);
			this.setState({ redirect: true })
		}, (err) => {
			console.log(err);
		})
	}

   render() {

   	const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/myproduk'/>;
     }

    return (
	    <div>
      <Headnav />
            <Navbar />
	      <div className="card col-md-4 offset-md-4 mt-5 pt-5 pb-5">
			<FormUploadProduk 
				inputData={this.handleTambahProduk.bind(this)} 
				submit={this.handleSubmit.bind(this)} 
			/>      	
	      </div>
	     </div>
    );
  }
}

export default VUploadProduk;