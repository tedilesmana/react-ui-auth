import React from 'react';
import '../../style/CardNotifikasi.css';
import CardProduct from '../home/CardProduct';
import BtnIcon from '../reusable/BtnIcon';

const CardNotifikasi = () => {
  return (
  	<div className="m-4">
	  	<div className="col-md-12 card p-4">
	  	 <div className="row">
		      <div className="col-md-3" id="notifikasi">
		       	<CardProduct /> 
		      </div>
		      <div className="col-md-9">
			      <div className="card p-5" id="desk-notif"> 
			      	<b>Pesanan anda sedang dalam pengiriman, berikut adalah invoice pengiriman anda :</b>
			      	<br/>
			      	<ul className="ml-4 p-2">
			      		<li>Nama Jasa Pengiriman : JNE</li>
			      		<li>Invoice : INV9999999</li>
			      		<li>Nomor resi pengiriman : JNE464655</li>
			      		<li>Lokasi Pengiriman : Jakarta Timur</li>
			      	</ul>
			      	<div className="c-icon">
				      	<span className="btn-notif" >
				      		<BtnIcon class="fas fa-shipping-fast" color="primary"/>
				      	</span>
				      	<span className="btn-notif">
				      		<BtnIcon class="fas fa-trash-alt" color="secondary"/>
				      	</span>
			      	</div>
			      </div>
		      </div>
	      </div>
	    </div>
    </div>
  )
}

export default CardNotifikasi;