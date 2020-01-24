import React, { Component } from 'react';
import CardProduct from '../component/home/CardProduct';
import BtnCard from '../component/home/BtnCard';
import BtnPill from '../component/reusable/BtnPill';
import axios from 'axios';
import Headnav from '../component/template/navigasi/Headnav';
import Navbar from '../component/template/navigasi/Navbar';

class VHome extends Component {


constructor(props) {
        super(props);
        this.state = {
          post:[]
        }
    }

componentDidMount(){
  axios.get('http://localhost:3004/posts')
  .then((result) => {
      this.setState({
          post:result.data
      })
  })

  console.log(this.state.post);

  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then(response => response.json())
  // .then(json => console.log(json))
}
// super(props)

	// this.state = {
		// name:''
	// }

	// this.onSubmit = this.onSubmit.bind(this);
	// this.handleChange = this.handleChange.bind(this);
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
                            <BtnPill 
                            label="BELI"
                            icon="fas fa-dollar-sign"
                            />
                          </div>
                  })
                }
		         
        </div>
      </div>
      </div>
    );
  }
}

export default VHome;
