import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class FormEditProduk extends Component {

constructor() {
        super();
        this.state = {
          produk:{
                  id:'',
                  nama_produk:'',
                  harga_produk:'',
                  image_produk:''
                  },
          redirect: false
        }
    }

componentDidMount(){
  axios.get(`http://localhost:3004/posts/${this.props.idValue}`)
  .then((result) => {
    // console.log(result);
      this.setState({
          produk:result.data
      })
  })
    // console.log(this.props.idValue);

  // return <Redirect to='/edit_produk' />
  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then(response => response.json())
  // .then(json => console.log(json))
}

handleChang(e) {
  let val = e.target.value;
  let name_val = e.target.name;
  let val_produk = this.state.produk;

  val_produk[name_val]= val ;
  
  this.setState({
      produk:val_produk
  }, () => {
    // console.log(this.state.produk);
  })
}

handleSubmit = (e, data) => {
  e.preventDefault();
    this.putDataToApi(data);
}

putDataToApi = (data) => {
  axios.put(`http://localhost:3004/posts/${data}`, this.state.produk).then((res) => {
      this.setState({ redirect: true })
  })
}

render(){

const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/myproduk'/>;
     }


    return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <form onSubmit={e => this.handleSubmit(e, this.state.produk.id)}>
            <p className="h4 text-center mb-4">Edit Data Produk</p>
            
            <hr/>

            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Nama Produk
            </label>
            <input
              type="text"
              id="nama_produk"
              name="nama_produk"
              className="form-control"
              value={this.state.produk.nama_produk}
              onChange={this.handleChang.bind(this)}
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Harga Produk
            </label>
            <input
              type="text"
              id="harga_produk"
              name="harga_produk"
              className="form-control"
              value={this.state.produk.harga_produk}
              onChange={this.handleChang.bind(this)}
            />
            <br />
            <label
              htmlFor="defaultFormRegisterConfirmEx"
              className="grey-text"
            >
              Url Produk
            </label>
            <input
              type="text"
              id="image_produk"
              name="image_produk"
              className="form-control"
              value={this.state.produk.image_produk}
              onChange={this.handleChang.bind(this)}
            />
            <br />
            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                Tambah Produk
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  };
}

export default FormEditProduk;

