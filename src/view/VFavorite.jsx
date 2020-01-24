import React, { Component } from 'react';
import CardFavorite from '../component/favorite/CardFavorite';
import Headnav from '../component/template/navigasi/Headnav';
import Navbar from '../component/template/navigasi/Navbar';

class VFavorite extends Component {

  render() {
    return (
      <div className="">
		        <Headnav />
		        <Navbar />
      	<CardFavorite />
      </div>
    );
  }
}

export default VFavorite;