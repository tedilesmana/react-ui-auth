import React from 'react';
import CardProduct from '../component/home/CardProduct';
import HeaderCart from '../component/cart/HeaderCart';
import MyOrder from '../component/cart/MyOrder';
import { MDBCollapse } from "mdbreact";
import Headnav from '../component/template/navigasi/Headnav';
import Navbar from '../component/template/navigasi/Navbar';

class VCart extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			collapseID: "myOrder",
			value: 0
		}
	}

	toggleCollapse = collapseID => () => {
	  	this.setState({
	  		collapseID: ""
	  	});

	  	setTimeout(
		    function() {
		        this.setState(prevState => ({
		    		collapseID: prevState.collapseID !== collapseID ? collapseID : ""
		  		}))
		    }.bind(this),
		    500
		);
	}


	Plus (){
	    this.setState({
	      value: this.state.value + 1
	    });
	}

	Minus (){
		if (this.state.value>0){
		    this.setState({
		      value: this.state.value - 1
		    });
		}
		// if (this.state.value>0) {
		//     this.setState({
		//       value: this.state.value - 1
		//     }, () => {
		//     	this.HandleCounter(this.state.value);
		//     })
	 //  	}
	}


	render() {
		return (
			<div className="col-md-12">
		        <Headnav />
		        <Navbar />
				<div className="border m-3 p-3">
					{/*component MyOrder*/}
					{/*#######################*/}
					<HeaderCart 
						myOrder = {this.toggleCollapse("myOrder") } 
						detailOrder = {this.toggleCollapse("detailOrder") } 
					/>
					{/*end component MyOrder*/}
					<div className="row p-2">
		  				<div className="col-3" id="card">
			  				{/*component MyOrder*/}
							{/*#######################*/}
				            <CardProduct />
				           	{/*end component MyOrder*/}
		    			</div>
			            <MDBCollapse className="col-md-9" id="myOrder" isOpen={this.state.collapseID}>
				          	{/*component MyOrder*/}
							{/*#######################*/}
				          	<MyOrder 
				          		Plus = {this.Plus.bind(this)}
				          		Minus = {this.Minus.bind(this)}
				          		value = {this.state.value}
				          	/>
				          	{/*end component MyOrder*/}
				        </MDBCollapse>
				        <MDBCollapse className="col-md-9" id="detailOrder" isOpen={this.state.collapseID}>
				          <p>
				            Test Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque a, cumque blanditiis. Consequatur aspernatur praesentium perferendis, libero alias quibusdam tenetur odit quasi, dolore quaerat corporis maiores, neque velit, culpa quam!
				          </p>
				        </MDBCollapse>
			        </div>
				</div>
			</div>
		);
	}
}

export default  VCart;