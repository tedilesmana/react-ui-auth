import React, { Component } from 'react';
import CardNotifikasi from '../component/notifikasi/CardNotifikasi';
import Headnav from '../component/template/navigasi/Headnav';
import Navbar from '../component/template/navigasi/Navbar';

class VNotifikasi extends Component {

  render() {
    return (
      <div>
      <Headnav />
            <Navbar />
      	<CardNotifikasi />
      </div>
    );
  }
}

export default VNotifikasi;