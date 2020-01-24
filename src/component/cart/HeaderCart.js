import React from 'react';

const HeaderCart = (props) => {
  return (
    <div className="bg-success text-white font-weight-bold card-header rounded ml-2 mr-2">
		<b>I-PHONE</b>
		<span className="float-right">
			<span
			  className="btn-sm btn-outline-white pl-3 pr-3"
		      color="primary"
		      onClick={props.myOrder}
		    >
		      Detail
		    </span>
		</span>
		<span className="float-right mr-3">
			<span
			  className="btn-sm btn-outline-white pl-3 pr-3"
		      color="primary"
		      onClick={props.detailOrder}
		    >
		      My Order
		    </span>
		</span>
	</div>
  )
}

export default HeaderCart;