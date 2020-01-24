import React, { Component } from 'react';
import CardProduct from '../component/home/CardProduct';
import BtnCard from '../component/home/BtnCard';
import BtnPill from '../component/reusable/BtnPill';
import axios from 'axios';
import '../style/VMyProduk.css';
import { Link } from "react-router-dom";
import Headnav from '../component/template/navigasi/Headnav';
import Navbar from '../component/template/navigasi/Navbar';
// import { Redirect } from 'react-router-dom';

class VMyProduk extends Component {


constructor(props) {
    super(props);
        this.state = {
          post:[],
          id:''
        }
    }
getPostApi = () => {
	axios.get('http://localhost:3004/posts')
	.then((result) => {
	  this.setState({
	      post:result.data
	  })
	})
}

componentDidMount(){
  	this.getPostApi()
}

handleHapus = (e, data) => {
	e.preventDefault();
	axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
		this.getPostApi()
	})
}

// handleEdit = (e, data) => {
// 	e.preventDefault();
	// this.setState({
	//       id: data.id
	//  }, () => {
	//  	this.handleValue(this.state.id);
	//  })
	// return <Redirect to='/edit_produk' />
	
// }

// handleValue = (idValue) => {
// 	console.log(idValue);
// 	this.props.passValue(idValue);
// }

  render() {
    return (
      <div>
      <Headnav />
            <Navbar />
      <div className="col-md-12 pl-5 pr-5 pt-3">
        <div className="row">
  				
		            {
                  this.state.post.map(post => {
                  return  <div className="col-md-2 p-2" id="card" key={post.id} >
                            <CardProduct title={post.nama_produk} harga={post.harga_produk} img={post.image_produk} />
                            <BtnCard />
                            <div className="hapus" onClick={e => this.handleHapus(e, post.id)}>
                            	<BtnPill label="Hapus" icon="fas fa-trash"/>
                            </div>

                            <Link to={"edit_produk/"+post.id} className="update">
                             {/*onClick={e => this.handleEdit(e, post)}*/}
                            	<BtnPill label="Edit" icon="fas fa-edit" />
                            </Link>
                          </div>
                  })
                }
		         
        </div>
      </div>
      </div>
    );
  }
}

export default VMyProduk;
